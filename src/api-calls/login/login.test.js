// userLogin.test.mjs
import { userLogin } from './login.mjs';
// import { loginUrl } from '../../globalValues/urls.mjs';

// Mock global dependencies and setup
global.fetch = jest.fn();
localStorage.setItem = jest.fn();
global.window.location.reload = jest.fn();

// Helper function to reset mocks before each test
beforeEach(() => {
  fetch.mockClear();
  localStorage.setItem.mockClear();
  window.location.reload.mockClear();
  document.body.innerHTML = `<span id="errorMessageLogIn"></span>`; // Reset DOM
});

describe('userLogin', () => {
  test('sets accessToken and userName in localStorage on successful login', async () => {
    // Mock a successful fetch response
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ accessToken: 'fakeToken', name: 'John' }),
    });

    await userLogin({ email: 'test@example.com', password: 'correctpassword' });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'accessToken',
      'fakeToken'
    );
    expect(localStorage.setItem).toHaveBeenCalledWith('userName', 'John');
    expect(window.location.reload).toHaveBeenCalled();
  });

  test('displays an error message on failed login', async () => {
    // Mock a failed fetch response
    fetch.mockResolvedValueOnce({
      ok: false,
      json: () =>
        Promise.resolve({ errors: [{ message: 'Invalid credentials' }] }),
    });

    await userLogin({ email: 'test@example.com', password: 'wrongpassword' });

    const errorDisplay = document.getElementById('errorMessageLogIn');
    expect(errorDisplay.innerHTML).toContain('Invalid credentials');
    expect(localStorage.setItem).not.toHaveBeenCalledWith(
      'accessToken',
      expect.any(String)
    );
    expect(localStorage.setItem).not.toHaveBeenCalledWith(
      'userName',
      expect.any(String)
    );
  });

  test('displays a generic error message on fetch failure', async () => {
    // Mock a fetch failure
    fetch.mockRejectedValueOnce(new Error('Network error'));

    await userLogin({ email: 'test@example.com', password: 'doesntmatter' });

    const errorDisplay = document.getElementById('errorMessageLogIn');
    expect(errorDisplay.innerHTML).toContain('Login failed: Network error');
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });
});
