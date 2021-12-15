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
    public class NewsService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDataSource;
        private readonly Context ctx;

        public NewsService()
        {
        }

        public NewsService(IConfiguration config, Context context)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
            ctx = context;
        }

        public List<News> findAll()
        {
            return ctx.News.ToList();
        }

        public News FindById(int id)
        {
            try
            {
                return ctx.News.Single(s => s.Id == id);
            }
            catch
            {
                return null;
            }
        }

        public int save(News news)
        {
            try
            {
                ctx.News.Add(news);
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
                var deletedNews = ctx.News.Single(s => s.Id == id);
                ctx.News.Remove(deletedNews);
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }

        public int update(int id, News news)
        {
            try
            {
                News n = ctx.News.Single(s => s.Id == id);
                n.Title = news.Title;
                n.Thumbnail = news.Thumbnail;
                n.Content = news.Content;
                return ctx.SaveChanges();
            }
            catch
            {
                return -1;
            }
        }
    }
}
