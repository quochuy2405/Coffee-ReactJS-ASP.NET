using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class Supplier
    {
        private int id;
        private string name;
        private string description;
        private string address;
        private string city;
        private string country;
        private string phone;
        private string url;

        private ICollection<Product> products;

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Description { get => description; set => description = value; }
        public string Address { get => address; set => address = value; }
        public string City { get => city; set => city = value; }
        public string Country { get => country; set => country = value; }
        public string Phone { get => phone; set => phone = value; }
        public string Url { get => url; set => url = value; }
        public ICollection<Product> Products { get => products; set => products = value; }
    }
}
