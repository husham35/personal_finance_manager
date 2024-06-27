// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('/api/auth/register', { username, password });
//             setMessage(response.data.message);
//             navigate('/login');
//         } catch (error) {
//             setMessage('Registration failed. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h2>Register</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Username</label>
//                     <input 
//                         type="text" 
//                         value={username} 
//                         onChange={(e) => setUsername(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input 
//                         type="password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)} 
//                         required 
//                     />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default Register;
