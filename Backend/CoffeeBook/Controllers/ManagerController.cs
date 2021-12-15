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
    //[Route("api/[controller]")]
    [ApiController]
    public class ManagerController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly ManagerService service;
        private readonly Context context;
        public ManagerController(IConfiguration config, Context ctx)
        {
            _config = config;
            context = ctx;
            service = new ManagerService(config, context);
        }

        [Route("managers")]
        [HttpGet]
        public JsonResult Get()
        {
            var managers = service.GetAllManagers();
            return new JsonResult(managers);
        }

        [Route("manager/{id}")]
        [HttpGet]
        public ActionResult GetById(int id)
        {
            var manager = service.GetManagerById(id);
            if (manager == null) return BadRequest();
            return new JsonResult(manager);
        }

        [Route("manager/create")]
        [HttpPost]
        public ActionResult Post(Manager manager)
        {
            if (ModelState.IsValid)
            {
                if (service.Post(manager) > 0)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Route("manager/update/{id}")]
        [HttpPut]
        public ActionResult Put(int id, Manager manager)
        {
            if (ModelState.IsValid)
            {
                if (service.Put(id, manager) > 0)
                    return Ok();
            }
            return BadRequest();
        }

        [Route("manager/delete/{id}")]
        [HttpDelete]
        public ActionResult Delete(int id)
        {
            if (service.Delete(id) > 0)
                return Ok();

            return BadRequest();
        }
    }
}
