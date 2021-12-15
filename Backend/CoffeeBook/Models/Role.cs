using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class Role
    {
        private int id;
        private string roleName;
        private string description;

        private ICollection<Account> accounts;

        public int Id { get => id; set => id = value; }
        public string RoleName { get => roleName; set => roleName = value; }
        public string Description { get => description; set => description = value; }
        public ICollection<Account> Accounts { get => accounts; set => accounts = value; }
    }
}
