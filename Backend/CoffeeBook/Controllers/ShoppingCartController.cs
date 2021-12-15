using CoffeeBook.DataAccess;
using CoffeeBook.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Controllers
{
    /*[Route("api/[controller]")]*/
    [ApiController]
    public class ShoppingCartController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ShoppingCartService service;
        private readonly Context context;

        public ShoppingCartController(IConfiguration config, Context ctx)
        {
            _config = config;
            context = ctx;
            service = new ShoppingCartService(_config);
        }
    }
}
