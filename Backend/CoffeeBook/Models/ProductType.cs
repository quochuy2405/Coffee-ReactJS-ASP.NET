using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class ProductType
    {
        private int id;
        private string name;
        private string description;
        private string photo;

        private ICollection<Product> products;

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Description { get => description; set => description = value; }
        public ICollection<Product> Products { get => products; set => products = value; }
        public string Photo { get => photo; set => photo = value; }
    }
}
