using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Services
{
    public class ShoppingCartService
    {
        private readonly IConfiguration _config;
        private readonly string sqlDataSource;

        public ShoppingCartService()
        {
        }

        public ShoppingCartService(IConfiguration config)
        {
            _config = config;
            sqlDataSource = _config.GetConnectionString("CoffeeBook");
        }
    }
}
