using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ExploreAngular.Models;

namespace ExploreAngular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReactiveFormDatasController : ControllerBase
    {
        private readonly EmployeeDBContext _context;

        public ReactiveFormDatasController(EmployeeDBContext context)
        {
            _context = context;
        }

        // GET: api/ReactiveFormDatas
        [HttpGet]
        public ActionResult<List<ReactiveFormData>> GetReactiveFormData()
        {
            var db= _context.ReactiveFormData;
            List<ReactiveFormData> data = db.ToList();
            return data;
        }

        // GET: api/ReactiveFormDatas/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetReactiveFormData([FromRoute] int id)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            var reactiveFormData = await _context.ReactiveFormData.FindAsync(id);

            if (reactiveFormData == null)
            {
                return NotFound();
            }

            return Ok(reactiveFormData);
        }

        // PUT: api/ReactiveFormDatas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReactiveFormData([FromRoute] int id, [FromBody] ReactiveFormData reactiveFormData)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            if (id != reactiveFormData.Id)
            {
                return BadRequest();
            }

            _context.Entry(reactiveFormData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReactiveFormDataExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ReactiveFormDatas
        [HttpPost]
        public async Task<IActionResult> PostReactiveFormData([FromBody] ReactiveFormData reactiveFormData)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            _context.ReactiveFormData.Add(reactiveFormData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReactiveFormData", new { id = reactiveFormData.Id }, reactiveFormData);
        }

        // DELETE: api/ReactiveFormDatas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReactiveFormData([FromRoute] int id)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            var reactiveFormData = await _context.ReactiveFormData.FindAsync(id);
            if (reactiveFormData == null)
            {
                return NotFound();
            }

            _context.ReactiveFormData.Remove(reactiveFormData);
            await _context.SaveChangesAsync();

            return Ok(reactiveFormData);
        }

        private bool ReactiveFormDataExists(int id)
        {
            return _context.ReactiveFormData.Any(e => e.Id == id);
        }
    }
}