using CoffeeBook.DataAccess;
using CoffeeBook.Dto;
using CoffeeBook.Models;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;

namespace CoffeeBook.Services
{
    public class CustomerService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDataSource;
        private readonly Context ctx;

        public CustomerService()
        {
        }

        public CustomerService(IConfiguration config)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
        }

        public CustomerService(IConfiguration config, Context context)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
            ctx = context;
        }

        public List<Customer> findAll()
        {
            try
            {
                return ctx.Customers.ToList();
            }
            catch
            {
                return null;
            }
        }

        public int save(Customer customer)
        {
            try
            {
                ctx.Customers.Add(customer);
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public Customer findById(int id)
        {
            try
            {
                return ctx.Customers.Single(s => s.Id == id);
            }
            catch
            {
                return null;
            }
        }

        public string Register(SignupDto dto)
        {
            var errorList = new List<string>();
            bool[] flag = { false, false, false };
            var customers = ctx.Customers.ToList();
            foreach (var cust in customers)
            {
                if (cust.Username == dto.Username)
                {
                    if (!flag[0])
                    {
                        flag[0] = true;
                        errorList.Add("Username");
                    }
                }
                if (cust.Email == dto.Email)
                {
                    if (!flag[1])
                    {
                        flag[1] = true;
                        errorList.Add("Email");
                    }
                }
                if (cust.Phone == dto.Phone)
                {
                    if (!flag[2])
                    {
                        flag[2] = true;
                        errorList.Add("Phone");
                    }
                }
            }
            if (errorList.Count != 0) return JsonSerializer.Serialize(errorList);
            try
            {
                Customer customer = new Customer();
                customer.Username = dto.Username;
                customer.Password = dto.Password;
                customer.Phone = dto.Phone;
                customer.Email = dto.Email;
                customer.Name = dto.Name;

                ctx.Customers.Add(customer);
                var res = ctx.SaveChanges();
                if (res > 0) return "1";
                return "";
            }
            catch (Exception ex)
            {
                return "0";
            }
        }

        public Customer Login(SigninDto dto)
        { try
            {
            var query = from c in ctx.Customers
                        where c.Username == dto.Username
                        where c.Password == dto.Password
                        select c;

            return query.FirstOrDefault();
            }
            catch
            {
                return null;
            }
        }

        public int deleteById(int id)
        {
            try
            {
                var deletedCustomer = ctx.Customers.Single(s => s.Id == id);
                ctx.Customers.Remove(deletedCustomer);
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public int update(int id, Customer customer)
        {
            try
            {
                Customer cus = ctx.Customers.Single(s => s.Id == id);
                cus.Name = customer.Name;
                cus.Email = customer.Email;
                cus.Phone = customer.Phone;
                cus.Address = customer.Address;
                cus.Gender = customer.Gender;
                cus.Avata = customer.Avata;
                return ctx.SaveChanges();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return -1;
            }


        }
    }
}
