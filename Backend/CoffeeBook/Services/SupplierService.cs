using CoffeeBook.DataAccess;
using CoffeeBook.Models;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Services
{
    public class SupplierService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDataSource;
        private readonly Context ctx;

        public SupplierService()
        {
        }

        public SupplierService(IConfiguration config, Context context)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
            ctx = context;
        }

        public List<Supplier> findAll()
        {
            return ctx.Suppliers.ToList();
        }

        public Supplier findById(int id)
        {
            try
            {
                return ctx.Suppliers.Single(s => s.Id == id);
            }
            catch
            {
                return null;
            }
        }

        public int save(Supplier supplier)
        {
            try
            {
                ctx.Suppliers.Add(supplier);
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public int deleteById(int id)
        {
            try
            {
                var deletedSupplier = ctx.Suppliers.Single(s => s.Id == id);
                ctx.Suppliers.Remove(deletedSupplier);
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public int Update(int id, Supplier supplier)
        {
            try
            {
                Supplier sup = ctx.Suppliers.Single(s => s.Id == id);
                sup.Name = supplier.Name;
                sup.Phone = supplier.Phone;
                sup.Url = supplier.Url;
                sup.Country = supplier.Country;
                sup.City = supplier.City;
                sup.Description = supplier.Description;
                sup.Address = supplier.Address;
                return ctx.SaveChanges();
            }
            catch { return -1; }
        }
    }
}
