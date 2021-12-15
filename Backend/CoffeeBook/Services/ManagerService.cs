using CoffeeBook.DataAccess;
using CoffeeBook.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Services
{
    public class ManagerService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDatasource;
        private readonly Context _context;
        public ManagerService() { }
        public ManagerService(IConfiguration config)
        {
            _config = config;
            sqlDatasource = _config.GetConnectionString("CoffeeBook");
        }
        public ManagerService(IConfiguration config, Context context)
        {
            _config = config;
            _context = context;
            sqlDatasource = _config.GetConnectionString("CoffeeBook");
        }

        public List<Manager> GetAllManagers()
        {
            return _context.Managers.ToList();
        }

        public Manager GetManagerById(int id)
        {
            try
            {
                return _context.Managers.Single(s => s.Id == id);
            }
            catch
            {
                return null;
            }
        }

        public int Post(Manager model)
        {
            try
            {
                _context.Managers.Add(model);
                var result = _context.SaveChanges();
                return result;
            }
            catch
            {
                return -1;
            }
        }

        public int Put(int id, Manager model)
        {
            try
            {
                var manager = _context.Managers.Single(s => s.Id == id);
                manager.Name = model.Name;
                manager.Age = model.Age;
                manager.Gender = model.Gender;
                manager.Address = model.Address;
                manager.City = model.City;
                manager.Country = model.Country;
                manager.Email = model.Email;
                manager.Phone = model.Phone;
                manager.Salary = model.Salary;
                manager.Status = model.Status;

                var result = _context.SaveChanges();
                return result;
            }
            catch
            {
                return -1;
            }
        }

        public int Delete(int id)
        {
            try
            {
                var manager = _context.Managers.Single(s => s.Id == id);
                _context.Managers.Remove(manager);
                var result = _context.SaveChanges();
                return result;
            }
            catch
            {
                return -1;
            }
        }
    }
}
