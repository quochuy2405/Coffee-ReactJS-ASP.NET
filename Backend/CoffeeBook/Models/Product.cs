using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class Product
    {
        private int id;
        private string name;
        private string description;
        private int price;
        private DateTime createdDate;
        private string photo;
        private int size;

        private int? productTypeId;
        private ProductType productType;

        private int? supplierId;
        private Supplier supplier;

        private ICollection<ShoppingCart_Product> shoppingCart_Products;

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public string Description { get => description; set => description = value; }
        public int Price { get => price; set => price = value; }
        public DateTime CreatedDate { get => createdDate; set => createdDate = value; }
        public string Photo { get => photo; set => photo = value; }
        public int Size { get => size; set => size = value; }
        public int? ProductTypeId { get => productTypeId; set => productTypeId = value; }
        public ProductType ProductType { get => productType; set => productType = value; }
        public int? SupplierId { get => supplierId; set => supplierId = value; }
        public Supplier Supplier { get => supplier; set => supplier = value; }
        public ICollection<ShoppingCart_Product> ShoppingCart_Products { get => shoppingCart_Products; set => shoppingCart_Products = value; }
    }
}
