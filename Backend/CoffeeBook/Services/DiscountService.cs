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
    public class DiscountService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDataSource;
        private readonly Context ctx;

        public DiscountService()
        {
        }

        public DiscountService(IConfiguration config, Context context)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
            ctx = context;
        }

        public List<Discount> FindAll()
        {
            return ctx.Discounts.ToList();
        }

        public Discount FindById(int id)
        {
            try
            {
                return ctx.Discounts.Single(s => s.Id == id);
            }
            catch
            {
                return null;
            }
        }

        public int save(Discount discount)
        {
            try
            {
                ctx.Discounts.Add(discount);
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public int DeleteById(int id)
        {
            try
            {
                var deletedDiscount = ctx.Discounts.Single(s => s.Id == id);
                ctx.Discounts.Remove(deletedDiscount);
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public int Update(int id, Discount discount)
        {
            try
            {
                var updatedDiscount = ctx.Discounts.Single(s => s.Id == id);
                updatedDiscount.Name = discount.Name;
                updatedDiscount.Photo = discount.Photo;
                updatedDiscount.Quantity = discount.Quantity;
                updatedDiscount.Value = discount.Value;
                updatedDiscount.ExpiredDate = discount.ExpiredDate;
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }
    }
}
