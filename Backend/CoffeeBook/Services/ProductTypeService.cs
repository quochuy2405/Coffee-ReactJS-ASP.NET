using CoffeeBook.DataAccess;
using CoffeeBook.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Services
{
    public class ProductTypeService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDataSource;
        private readonly Context _context;

        public ProductTypeService()
        {
        }

        public ProductTypeService(IConfiguration config)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
        }

        public ProductTypeService(IConfiguration config, Context context)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
            _context = context;
        }

        public List<ProductType> FindAll()
        {
            return _context.ProductTypes.ToList();
        }

        public ProductType GetProductTypeById(int id)
        {
            try
            {
                return _context.ProductTypes.Single(s => s.Id == id);
            }
            catch { return null; }
        }

        public int Post(ProductType model)
        {
            try
            {
                _context.ProductTypes.Add(model);
                return _context.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public int Put(int id, ProductType model)
        {
            try
            {
                var productType = _context.ProductTypes.Single(s => s.Id == id);
                productType.Name = model.Name;
                productType.Description = model.Description;
                productType.Photo = model.Photo;
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
                var productType = _context.ProductTypes.Single(s => s.Id == id);
                _context.ProductTypes.Remove(productType);
                return _context.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }
    }
}
