using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SqueletteImplantation.DbEntities.Models
{
    public class Trace
    {
        public int TracId { get; set; }
        public string TraceNom { get; set; }
        public string TracUrl { get; set; }

        public List<RelTracCrit> reltraccrit { get; set; }
        
    }
}
