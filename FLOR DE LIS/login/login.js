document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');
    
    if (email === 'usuario@example.com' && password === 'senha123') {
      message.textContent = 'Login bem-sucedido!';
      message.style.color = 'green';
      // Aqui você pode redirecionar para outra página, por exemplo:
      // window.location.href = 'dashboard.html';
    } else {
      message.textContent = 'Credenciais inválidas. Por favor, tente novamente.';
      message.style.color = 'red';
    }
  });
  