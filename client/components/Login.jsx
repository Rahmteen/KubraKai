<h1>Login</h1>
<% if (messages.error) { %> 
    <%= messages.error%>
<% }%> 
<form action="/auth/login" method='POST'>
  <div>
    <label for ="email">Email</label>
    <input type='email' id='email' name = 'email' required>
</div>
<div>
    <label for ="pwd">Password</label>
    <input type='password' id='pwd' name = 'pwd' required>
</div>
<button type = 'submit'>Login</button>
</form>
<a href="/auth/register">Register</a><br>
<a href="/auth/google">google!</a>