using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Models
{
    public class Store
    {
        private int id;
        private string storeName;
        private string description;
        private string address;
        private string country;
        private string phone;

        private int? managerId;
        private Manager manager;

        private ICollection<Employee> employees;

        public int Id { get => id; set => id = value; }
        public string StoreName { get => storeName; set => storeName = value; }
        public string Description { get => description; set => description = value; }
        public string Address { get => address; set => address = value; }
        public string Country { get => country; set => country = value; }
        public string Phone { get => phone; set => phone = value; }
        public int? ManagerId { get => managerId; set => managerId = value; }
        public Manager Manager { get => manager; set => manager = value; }
        public ICollection<Employee> Employees { get => employees; set => employees = value; }
    }
}
