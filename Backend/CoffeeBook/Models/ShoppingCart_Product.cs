using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class ShoppingCart_Product
    {
        private int? shoppingCartId;
        private int? productId;
        private string tilteSize;
        private int count;
        private DateTime createdDate;

        private ShoppingCart shoppingCart;

        private Product product;

        public int? ProductId { get => productId; set => productId = value; }
        public ShoppingCart ShoppingCart { get => shoppingCart; set => shoppingCart = value; }
        public Product Product { get => product; set => product = value; }
        public string TilteSize { get => tilteSize; set => tilteSize = value; }
        public int Count { get => count; set => count = value; }
        public int? ShoppingCartId { get => shoppingCartId; set => shoppingCartId = value; }
        public DateTime CreatedDate { get => createdDate; set => createdDate = value; }
    }
}
