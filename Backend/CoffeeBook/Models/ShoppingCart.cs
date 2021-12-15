using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class ShoppingCart
    {
        private int id;
        private int? customerId;
        private Customer customer;
        private int productQuantity;
        private DateTime createdDate;

        private ICollection<ShoppingCart_Product> shoppingCart_Products;

        public int Id { get => id; set => id = value; }
        public int? CustomerId { get => customerId; set => customerId = value; }
        public Customer Customer { get => customer; set => customer = value; }
        public ICollection<ShoppingCart_Product> ShoppingCart_Products { get => shoppingCart_Products; set => shoppingCart_Products = value; }
        public int ProductQuantity { get => productQuantity; set => productQuantity = value; }
        public DateTime CreatedDate { get => createdDate; set => createdDate = value; }
    }
}
