using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Dto
{
    public class SigninDto
    {
        [Required]
        [StringLength(20, MinimumLength = 8, ErrorMessage = "Username phải nhiều hơn 8 kí tự")]
        private string username;
        [Required]
        [StringLength(100, MinimumLength = 8, ErrorMessage = "Password phải nhiều hơn 8 kí tự")]
        private string password;

        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
    }
}
