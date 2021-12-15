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

namespace CoffeeBook.Services
{
    public class BillService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDataSource;
        private readonly Context ctx;

        public BillService()
        {
        }
        public BillService(IConfiguration config)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
        }
        public BillService(IConfiguration config, Context context)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
            ctx = context;
        }

        public List<Bill> findAll()
        {
                return ctx.Bills.ToList();
        }

        public int save(Bill bill)
        {
            try
            {
                Bill newBill = new Bill();
                newBill.Address = bill.Address;
                newBill.Name = bill.Name;
                newBill.Note = bill.Note;
                newBill.Validated = bill.Validated;
                newBill.Status = bill.Status;
                newBill.PayBy = bill.PayBy;
                newBill.Phone = bill.Phone;
                newBill.Time = bill.Time;
                newBill.TotalPrice = bill.TotalPrice;
                newBill.CreatedDate = DateTime.Now;
                newBill.CustomerId = bill.CustomerId;
                ctx.Bills.Add(newBill);
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public List<Bill> GetBillId(int id)
        {
            try
            {
          
                List <Bill> bills = ctx.Bills.Where(e => e.CustomerId == id).ToList();
                
                return bills;
         
            }
            catch
            {
                Console.WriteLine("error");
                return null ;
            }
        }

        public int Purchase(BillDto dto)
        {
            try
            {
                Bill bill = new Bill();
                bill.Address = dto.Address;
                bill.Name = dto.Name;
                bill.Note = dto.Note;
                bill.PayBy = dto.PayBy;
                bill.Phone = dto.Phone;
                bill.Time = dto.Time;
                bill.TotalPrice = dto.TotalPrice;
                bill.CreatedDate = DateTime.Now;
                bill.CustomerId = dto.CustomerId;
                bill.Status = "Delivering";
                ctx.Bills.Add(bill);

                var billResult = ctx.SaveChanges();
                if (billResult >= 1)
                {
                    ShoppingCart shoppingCart = new ShoppingCart();
                    shoppingCart.CustomerId = dto.CustomerId;
                    shoppingCart.CreatedDate = DateTime.Now;
                    shoppingCart.ProductQuantity = dto.ListBill.Count();

                    ctx.ShoppingCarts.Add(shoppingCart);
                    var shoppingCartsResult = ctx.SaveChanges();
                    if (shoppingCartsResult >= 1)
                    {
                        var shoppingId = ctx.ShoppingCarts.OrderByDescending(u => u.Id).FirstOrDefault().Id;

                        foreach (ShoppingCart_Product item in dto.ListBill)
                        {
                            ShoppingCart_Product checkout = new ShoppingCart_Product();
                            checkout.ProductId = item.ProductId;
                            checkout.ShoppingCartId = shoppingId;
                            checkout.TilteSize = item.TilteSize;
                            checkout.Count = item.Count;

                            ctx.ShoppingCart_Products.Add(checkout);

                        }
                        return ctx.SaveChanges();
                    }
                    return 0;
                }
                return 0;
            } catch
            {
                return -1;
            }
        }

        public int Delivery(int id)
        {
            try
            {
                Bill bill = ctx.Bills.Single(s => s.Id == id);
                bill.Status = "Paid";
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public int update(int id, Bill model)
        {
            try
            {
                Bill bill = ctx.Bills.Single(s => s.Id == id);
                bill.Address = model.Address;
                bill.Name = model.Name;
                bill.Note = model.Note;
                bill.Validated = model.Validated;
                bill.Status = model.Status;
                bill.PayBy = model.PayBy;
                bill.Phone = model.Phone;
                bill.Time = model.Time;
                bill.TotalPrice = model.TotalPrice;
                bill.CustomerId = model.CustomerId;
                return ctx.SaveChanges();
            } catch
            {
                return -1;
            }
            
        }

        public int DeleteById(int id)
        {
            try
            {
                Bill bill = ctx.Bills.Single(s => s.Id == id);
                ctx.Bills.Remove(bill);
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        
    }
}
