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
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly EmployeeService service;
        private readonly Context context;

        public EmployeeController(IConfiguration config, Context ctx)
        {
            _config = config;
            context = ctx;
            service = new EmployeeService(_config, context);
        }

        [Route("employees")]
        [HttpGet]
        public JsonResult Get()
        {
            var employees = service.GetAllEmployees();
            return new JsonResult(employees);
        }

        [Route("employee/{id}")]
        [HttpGet]
        public ActionResult GetById(int id)
        {
            var employee = service.GetEmployeeById(id);
            if (employee == null) return BadRequest();
            return new JsonResult(employee);
        }

        [Route("employee/create")]
        [HttpPost]
        public ActionResult Post(Employee employee)
        {
            if (ModelState.IsValid)
            {
                if (service.Post(employee) > 0)
                {
                    return Ok();
                }
            }
            return BadRequest();
        }

        [Route("employee/update/{id}")]
        [HttpPut]
        public ActionResult Put(int id, Employee employee)
        {
            if (ModelState.IsValid)
            {
                if (service.Put(id, employee) > 0)
                    return Ok();
            }
            return BadRequest();
        }

        [Route("employee/delete/{id}")]
        [HttpDelete]
        public ActionResult Delete(int id)
        {
            if (service.Delete(id) > 0)
                return Ok();

            return BadRequest();
        }
    }
}
