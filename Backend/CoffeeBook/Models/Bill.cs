using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class Bill
    {
        private int id;
        private int? customerId;
        private int validated;
        private string status;
        //
        private string address;
        private string name;
        private string phone;
        private string time;
        private string payBy;
        private string note;
        private DateTime createdDate;
        //
        private long totalPrice;
        private Customer customer;

        public int Id { get => id; set => id = value; }
        public int? CustomerId { get => customerId; set => customerId = value; }
        public int Validated { get => validated; set => validated = value; }
        public string Status { get => status; set => status = value; }
        public long TotalPrice { get => totalPrice; set => totalPrice = value; }
        public Customer Customer { get => customer; set => customer = value; }
        public string Address { get => address; set => address = value; }
        public string Name { get => name; set => name = value; }
        public string Phone { get => phone; set => phone = value; }
        public string Time { get => time; set => time = value; }
        public string PayBy { get => payBy; set => payBy = value; }
        public string Note { get => note; set => note = value; }
        public DateTime CreatedDate { get => createdDate; set => createdDate = value; }
    }
}
