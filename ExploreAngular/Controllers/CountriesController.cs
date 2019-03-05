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
    [Route("api/Countries/")]
    [ApiController]
    public class CountriesController : ControllerBase
    {
        private readonly EmployeeDBContext _context;

        public CountriesController(EmployeeDBContext context)
        {
            _context = context;
        }


        [Route("GetTblCountry")]
        // GET: api/Countries
        [HttpGet]
        public ActionResult<List<TblCountry>> GetTblCountry()
        {
           var db = _context.TblCountry;

            List <TblCountry> data= db.ToList();
            return data;
        }

        [Route("GetTblCountry/{id}")]
        // GET: api/Countries/5
        [HttpGet]
        public async Task<IActionResult> GetTblCountry([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var tblCountry = await _context.TblCountry.FindAsync(id);

            if (tblCountry == null)
            {
                return NotFound();
            }

            return Ok(tblCountry);
        }

        [Route("PutTblCountry/{id}")]
        // PUT: api/Countries/5
        [HttpPut]
        public async Task<IActionResult> PutTblCountry([FromRoute] int id, [FromBody] TblCountry tblCountry)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            if (id != tblCountry.Id)
            {
                return BadRequest();
            }

            _context.Entry(tblCountry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TblCountryExists(id))
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

        [Route("PostTblCountry")]
        // POST: api/Countries
        [HttpPost]
        public async Task<IActionResult> PostTblCountry([FromBody] TblCountry tblCountry)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            _context.TblCountry.Add(tblCountry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTblCountry", new { id = tblCountry.Id }, tblCountry);
        }

        [Route("DeleteTblCountry/{id}")]
        // DELETE: api/Countries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTblCountry([FromRoute] int id)
        {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            var tblCountry = await _context.TblCountry.FindAsync(id);
            if (tblCountry == null)
            {
                return NotFound();
            }

            _context.TblCountry.Remove(tblCountry);
            await _context.SaveChangesAsync();

            return Ok(tblCountry);
        }

        private bool TblCountryExists(int id)
        {
            return _context.TblCountry.Any(e => e.Id == id);
        }
    }
}