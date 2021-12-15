using CoffeeBook.DataAccess;
using CoffeeBook.Models;
using CoffeeBook.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Controllers
{
    /*[Route("api/[controller]")]*/
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ProductService service;
        private readonly Context context;

        public ProductController(IConfiguration config, Context ctx)
        {
            _config = config;
            context = ctx;
            service = new ProductService(_config, context);
        }

        [Route("products")]
        [HttpGet]
        public JsonResult Get()
        {
            List<Product> products = service.FindAll();
            return new JsonResult(products);
        }

        [Route("product/{id}")]
        [HttpGet]
        public ActionResult GetProductById(int id)
        {
            Product product = service.GetProductById(id);
            if (product == null) return BadRequest();
            return new JsonResult(product);
        }

        [Route("product/create")]
        [HttpPost]
        public ActionResult Post(Product product)
        {
            if (ModelState.IsValid)
            {
                if (service.Post(product) > 0)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Route("product/update/{id}")]
        [HttpPut]
        public ActionResult Put(int id, Product product)
        {
            if (ModelState.IsValid)
            {
                if (service.Put(id, product) > 0)
                    return Ok();
            }
            return BadRequest();
        }

        [Route("product/delete/{id}")]
        [HttpDelete]
        public ActionResult Delete(int id)
        {
            if (service.Delete(id) > 0)
                return Ok();

            return BadRequest();
        }
    }
}
