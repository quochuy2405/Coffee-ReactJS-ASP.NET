using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    [Index(nameof(Username), nameof(Email), nameof(Phone), IsUnique = true)]
    public class Customer
    {
        private int id;
        private string username;
        private string password;
        private string email;
        private string phone;
        private string name;
        private string avata;
        private string address;
        private string city;
        private string country;
        private int? gender;

        private ICollection<ShoppingCart> shoppingCarts;
        private ICollection<Bill> bills;

        public int Id { get => id; set => id = value; }
        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }
        public string Email { get => email; set => email = value; }
        public string Phone { get => phone; set => phone = value; }
        public string Name { get => name; set => name = value; }
        public string Avata { get => avata; set => avata = value; }
        public string Address { get => address; set => address = value; }
        public string City { get => city; set => city = value; }
        public string Country { get => country; set => country = value; }
        public int? Gender { get => gender; set => gender = value; }
        public ICollection<ShoppingCart> ShoppingCarts { get => shoppingCarts; set => shoppingCarts = value; }
        public ICollection<Bill> Bills { get => bills; set => bills = value; }
    }
}
