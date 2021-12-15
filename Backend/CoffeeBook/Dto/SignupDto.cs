using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Dto
{
    public class SignupDto
    {
        [Required]
        [StringLength(20,MinimumLength = 8, ErrorMessage = "Username phải nhiều hơn 8 kí tự")]
        private string username;
        [Required]
        [StringLength(100, MinimumLength = 8, ErrorMessage = "Password phải nhiều hơn 8 kí tự")]
        private string password;
        [Required]
        [Phone]
        private string phone;
        [Required]
        private string confirmPassword;
        [Required]
        private string name;
        [Required]
        [EmailAddress]
        private string email;
        /*private int gender;*/

        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
        public string Phone { get => phone; set => phone = value; }
        public string ConfirmPassword { get => confirmPassword; set => confirmPassword = value; }
        public string Email { get => email; set => email = value; }
        public string Name { get => name; set => name = value; }
        /*public int Gender { get => gender; set => gender = value; }*/
    }
}
