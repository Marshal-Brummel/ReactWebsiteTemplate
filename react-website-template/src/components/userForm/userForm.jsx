import './userForm.css';

const UserForm = ({formTitle, handleAction, buttonText}) => {
  return (
    <>
      <h1>{formTitle}</h1>
      <form method="post" onSubmit={handleAction}>
          <label>
              Email: <input type="email" name="email"/>
          </label>
          <label>
              Password: <input type="password" name="password"/>
          </label>
          <button type="submit">{buttonText}</button>
      </form>
    </>
  )
}

export default UserForm