using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using App_Anime.model;

namespace App_Anime.Data
{
    public class App_AnimeContext : DbContext
    {
        public App_AnimeContext (DbContextOptions<App_AnimeContext> options)
            : base(options)
        {
        }

        public DbSet<App_Anime.model.Anime> Anime { get; set; } = default!;
    }
}
