using CoffeeBook.DataAccess;
using CoffeeBook.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Services
{
    public class StoreService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDatasource;
        private readonly Context _context;

        public StoreService() { }
        public StoreService(IConfiguration config)
        {
            _config = config;
            sqlDatasource = _config.GetConnectionString("CoffeeBook");
        }
        public StoreService(IConfiguration config, Context context)
        {
            _config = config;
            sqlDatasource = _config.GetConnectionString("CoffeeBook");
            _context = context;
        }

        public List<Store> GetAllStores()
        {
            return _context.Stores.ToList();
        }

        public Store GetStoreById(int id)
        {
            try
            {
                return _context.Stores.Single(s=>s.Id == id);
            }
            catch
            {
                return null;
            }
        }

        public int Post(Store model)
        {
            try
            {
                _context.Stores.Add(model);
                var resutl = _context.SaveChanges();
                return resutl;
            }
            catch
            {
                return -1;
            }
        }

        public int Put(int id, Store model)
        {
            try
            {
                var store = _context.Stores.Single(s => s.Id == id);
                store.StoreName = model.StoreName;
                store.Description = model.Description;
                store.Address = model.Address;
                store.Country = model.Country;
                store.Phone = model.Phone;
                store.ManagerId = model.ManagerId;

                var res = _context.SaveChanges();
                return res;
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
                var store = _context.Stores.Single(s => s.Id == id);
                _context.Stores.Remove(store);

                var resulut = _context.SaveChanges();
                return resulut;
            }
            catch
            {
                return -1;
            }
        }
    }
}
