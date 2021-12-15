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
    public class ProductService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDataSource;
        private readonly Context _context;

        public ProductService()
        {
        }

        public ProductService(IConfiguration config)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
        }

        public ProductService(IConfiguration config, Context context)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
            _context = context;
        }

        public List<Product> FindAll()
        {
            return _context.Products.ToList();
        }

        public Product GetProductById(int id)
        {
            try
            {
                return _context.Products.Single(s => s.Id == id);
            }
            catch
            {
                return null;
            }
        }

        public int Post(Product model)
        {
            try
            {
                _context.Products.Add(model);
                return _context.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public int Put(int id, Product model)
        {
            try
            {
                var product = _context.Products.Single(s => s.Id == id);

                product.CreatedDate = model.CreatedDate;
                product.Description = model.Description; product.Name = model.Name;
                product.Photo = model.Photo;
                product.Price = model.Price;
                product.Size = model.Size;
                product.ProductTypeId = model.ProductTypeId;
                product.SupplierId = model.SupplierId;

                return _context.SaveChanges();
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
                var product = _context.Products.Single(s => s.Id == id);
                _context.Products.Remove(product);
                return _context.SaveChanges();
            }
            catch
            {
                return - 1;
            }
        }
    }
}
