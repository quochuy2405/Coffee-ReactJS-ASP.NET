using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class Account
    {
        private int id;
        private string username;
        private string password;
        private string name;
        private string avatar;
        private int? roleId;
        private Role role;

        public int Id { get => id; set => id = value; }
        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
        public int? RoleId { get => roleId; set => roleId = value; }
        public Role Role { get => role; set => role = value; }
        public string Name { get => name; set => name = value; }
        public string Avatar { get => avatar; set => avatar = value; }
    }
}
