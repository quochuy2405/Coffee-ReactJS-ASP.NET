using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class Discount
    {
        private int id;
        private string name;
        private int value;
        private int quantity;
        private DateTime expiredDate;
        private string photo;

        public int Id { get => id; set => id = value; }
        public string Name { get => name; set => name = value; }
        public int Value { get => value; set => this.value = value; }
        public int Quantity { get => quantity; set => quantity = value; }
        public DateTime ExpiredDate { get => expiredDate; set => expiredDate = value; }
        public string Photo { get => photo; set => photo = value; }
    }
}
