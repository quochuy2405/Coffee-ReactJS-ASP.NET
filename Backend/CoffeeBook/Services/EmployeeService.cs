using CoffeeBook.DataAccess;
using CoffeeBook.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Services
{
    public class EmployeeService
    {
        public readonly IConfiguration _config;
        public readonly string sqlDatasource;
        public readonly Context _context;
        public EmployeeService()
        {

        }
        public EmployeeService(IConfiguration config)
        {
            _config = config;
            sqlDatasource = _config.GetConnectionString("CoffeeBook");
        }
        public EmployeeService(IConfiguration config, Context context)
        {
            _config = config;
            sqlDatasource = _config.GetConnectionString("CoffeeBook");
            _context = context;
        }

        public List<Employee> GetAllEmployees()
        {
            return _context.Employees.ToList();
        }

        public Employee GetEmployeeById(int id)
        {
            try
            {
                return _context.Employees.Single(s => s.Id == id);
            }
            catch
            {
                return null;
            }
        }

        public int Post(Employee model)
        {
            try
            {
                _context.Employees.Add(model);
                var result = _context.SaveChanges();
                return result;
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return -1;
            }
            
        }

        public int Put(int id, Employee model)
        {
            try
            {
                var emp = _context.Employees.Single(s => s.Id == id);
                emp.Name = model.Name;
                emp.Age = model.Age;
                emp.Gender = model.Gender;
                emp.Address = model.Address;
                emp.Email = model.Email;
                emp.Phone = model.Phone;
                emp.Salary = model.Salary;
                emp.StoreId = model.StoreId;

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
                var emp = _context.Employees.Single(s => s.Id == id);
                _context.Employees.Remove(emp);
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
