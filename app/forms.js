import { useState } from "react";

export default function Home() {
    function showLoginForm() {
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    }
    
    function showRegistrationForm() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registrationForm').style.display = 'block';
    }

  const handleRegistrationSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Пользователь успешно зарегистрирован!");
      event.preventDefault();
    } else {
      const data = await response.json();
      alert(data.message);
      event.preventDefault();
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await fetch("http://localhost:8000/authorization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      alert("Good!");
      event.preventDefault();
    } else {
      const data = await response.json();
      alert(data.message);
      event.preventDefault();
    }
  };

  return (
    <main>
      {!showLoginForm && (
        <form id="registrationForm" onSubmit={handleRegistrationSubmit}>
          <div className="formContainer">
            <h2>Регистрация</h2>
            <label htmlFor="email">
              <strong>Почта</strong>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Введите почту"
              name="email"
              required
            />
            <label htmlFor="password">
              <strong>Пароль</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Введите пароль"
              name="password"
              required
            />
            <label htmlFor="repeatPassword">
              <strong>Повторите пароль</strong>
            </label>
            <input
              type="password"
              id="repeatPassword"
              placeholder="Повторите пароль"
              name="repeatPassword"
              required
            />
            <div>
              <button type="submit" className="signup">
                Зарегистрироваться
              </button>
            </div>
            <p>
              Уже есть учетная запись?{" "}
              <a href="#" onClick={showLoginForm}>
                Войти
              </a>
            </p>
          </div>
        </form>
      )}

      {showLoginForm && (
        <form id="loginForm" onSubmit={handleLoginSubmit}>
          <div className="formContainer">
            <h3>Авторизация</h3>
            <label htmlFor="email">
              <strong>Почта</strong>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Введите почту"
              name="email"
              required
            />
            <label htmlFor="password">
              <strong>Пароль</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Введите пароль"
              name="password"
              required
            />
            <div>
              <button type="submit" className="signup">
                Войти
              </button>
            </div>
            <p>
              Нет учетной записи?{" "}
              <a href="#" onClick={showRegistrationForm}>
                Зарегистрироваться
              </a>
            </p>
            <div className="message" id="message"></div>
          </div>
        </form>
      )}
    </main>
  );
}

