using CoffeeBook.DataAccess;
using CoffeeBook.Dto;
using CoffeeBook.Models;
using CoffeeBook.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeBook.Controllers
{
    /*[Route("api/[controller]")]*/
    [ApiController]
    public class BillController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly Context context;
        private readonly BillService _service;
        public BillController(IConfiguration config, Context ctx)
        {
            _config = config;
            context = ctx;
            _service = new BillService(_config, ctx);

        }

        [Route("bill")]
        [HttpGet]
        public JsonResult Get()
        {
            List<Bill> bills = _service.findAll();
            return new JsonResult(bills);
        }
        [Route("bill/{id}")]
        [HttpGet]
        public JsonResult GetById(int id)
        {
            List<Bill> bills = _service.GetBillId(id);
            return new JsonResult(bills);
        }
        [Route("bill/add")]
        [HttpPost]
        public ActionResult Post(Bill bill)
        {
            int table = _service.save(bill);
            if (table > 0) return Ok();
            else return BadRequest();
        }

        [Route("bill/edit/{id}")]
        [HttpPut]
        public ActionResult Put(int id, Bill bill)
        {
            int res = _service.update(id, bill);
            if (res > 0) return Ok();
            else return BadRequest();
        }

        [Route("bill/delete/{id}")]
        [HttpDelete]
        public ActionResult Delete(int id)
        {
            int res = _service.DeleteById(id);
            if (res > 0) return Ok();
            else return BadRequest();
        }

        [Route("bill/purchase")]
        [HttpPost]
        public ActionResult Purchase(BillDto dto)
        {
            int result = _service.Purchase(dto);
            if (result > 0)
                return Ok();
            else return BadRequest();
        }

        [Route("bill/delivery/{id}")]
        [HttpPut]
        public ActionResult Delivery(int id)
        {
            int res = _service.Delivery(id);
            if (res > 0) return Ok();
            else return BadRequest();
        }
    }
}
