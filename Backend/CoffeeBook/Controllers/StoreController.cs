using CoffeeBook.DataAccess;
using CoffeeBook.Models;
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
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly StoreService service;
        private readonly Context context;
        public StoreController(IConfiguration config, Context ctx)
        {
            _config = config;
            context = ctx;
            service = new StoreService(_config, context);
        }

        [Route("stores")]
        [HttpGet]
        public ActionResult Get()
        {
            var stores = service.GetAllStores();
            return new JsonResult(stores);
        }

        [Route("store/{id}")]
        [HttpGet]
        public ActionResult GetById(int id)
        {
            var store = service.GetStoreById(id);
            if (store == null) return BadRequest();
            return new JsonResult(store);
        }

        [Route("store/create")]
        [HttpPost]
        public ActionResult Post(Store store)
        {
            if (ModelState.IsValid)
            {
                if (service.Post(store) > 0)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Route("store/update/{id}")]
        [HttpPut]
        public ActionResult Put(int id, Store store)
        {
            if (ModelState.IsValid)
            {
                if (service.Put(id, store) > 0)
                    return Ok();
            }
            return BadRequest();
        }

        [Route("store/delete/{id}")]
        [HttpDelete]
        public ActionResult Delete(int id)
        {
            if (service.Delete(id) > 0)
                return Ok();

            return BadRequest();
        }
    }
}
