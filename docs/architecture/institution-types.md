# Institution types and specialized suites

How one Education OS serves different kinds of institutions. Decision: [ADR-0004](adr/0004-institution-profiles.md).
Source: the "Institution Types & Specialized Suite Opportunities" note (2026-10-06).

## The model

```
platform/ (core)  →  common suites  →  specialized suites  →  institution profile
```

Every institution runs the core and the common suites. It enables the specialized suites for
its field. The profile is the single document that says what is on.

| Tier | What | Where |
|---|---|---|
| Core | Identity, gateway, events, workflow, documents, notification, search, audit, reporting, scheduler, integration hub | `platform/` |
| Common | Admissions and students, academics, examinations, finance and HR, campus life, governance, support, facilities | `modules/*` with `tier: common` |
| Specialized | Field-specific behaviour | `modules/*` with `tier: specialized`, `field: <field>` |
| Profile | Enabled suites, modules, roles, dashboards, vocabulary for one institution | `platform/identity/config/profiles/` |

## Institution types and what they add

| Institution type | Specialized needs |
|---|---|
| Sports university / college | Athlete performance, teams and squads, coaching and training, fitness, competitions, sports facilities, injury and wellness, athlete scholarships |
| Arts academy / fine arts | Studios, artist portfolio, artwork and projects, exhibitions and galleries, critique and jury, materials inventory, showcases |
| Design / fashion institute | Design studios, portfolio, collections, pattern and sample tracking, critiques, shows, industry projects, internships, studio and equipment booking |
| Music academy / conservatory | Instruments, practice room booking, lessons, auditions, recitals and concerts, repertoire, ensembles and orchestra |
| Dance / performing arts | Classes, choreography, practice studios, auditions, performances and productions, cast and crew, costume and props, skill progress |
| Theatre / drama | Productions, casting and auditions, rehearsals, scripts and rights, cast and crew, stage and venue, costume and props, tickets |
| Film / media / animation | Film projects, production management, cast and crew, editing and post, media assets, equipment booking, screenings and festivals, showreel |
| Medical / health sciences | Clinical training and rotations, skills training, hospital integration, labs, internships and residency, research, accreditation |
| Law | Moot court, legal internships, case and research projects, legal clinics, debates and competitions, court visits, placements |
| Engineering / technology | Laboratories, capstone projects, industrial training, innovation and incubation, hackathons, technical clubs, research, placements, lab equipment booking |
| Management / business | Corporate relations, internships, case competitions, live projects, placements, alumni mentoring, executive education, industry events, entrepreneurship |
| Agriculture / veterinary / field sciences | Field training, farm and facility management, practical rotations, labs, research trials, extension activities, field internships |
| Hospitality / hotel management | Training kitchen and lab, hotel operations training, internships, practical assessments, banquet and event training, industry partnerships, placements, equipment inventory |
| Teacher education / B.Ed. | Teaching practice, school internship, lesson planning, classroom observation, teaching portfolio, practicum assessment, mentors, placement |
| Research / doctoral university | PhD lifecycle, supervisor allocation, proposals, ethics approvals, research projects, grants, publications, conferences, thesis and viva |

## The eight patterns behind them

Most specialized needs are the same thing with a different name. Build each pattern once as a
common module. The profile supplies the vocabulary.

| Pattern | Common module | Appears as |
|---|---|---|
| Resource booking | `facilities/facility-booking` | Practice rooms, studios, labs, pitches, training kitchens, equipment, venues |
| Specialized inventory | `facilities/inventory-equipment` | Instruments, costumes and props, lab gear, art materials, sports equipment |
| Portfolio | `practice/portfolio` | Artist portfolio, design collection, showreel, teaching portfolio, publications |
| Selection process | `practice/selection-process` | Auditions, casting, squad selection, jury rounds, moot court teams, supervisor allocation |
| Productions and events | `practice/productions` | Performances, exhibitions, recitals, screenings, hackathons, case competitions, conferences |
| Projects | `practice/projects` | Capstone, film, live business, research, artwork projects, research trials |
| Field training | `practice/field-training` | Clinical rotations, teaching practice, farm rotations, internships, residency, court visits |
| Skill progress | `practice/skill-progress` | Technique grades, practicum assessment, skills training, competency tracking |

The `practice` suite is common: every academy gets it. Sports keeps its own specialized modules
(athlete-performance, training-video-analysis, sports-nutrition-health, tournament-events) because
it was built first; they are candidates to fold into the patterns later.

What stays specialized: anything with domain rules a pattern cannot carry, such as injury
and physio records, hospital integration, scripts and rights, thesis and viva, wearables.

## Example profiles

| Profile | Common suites | Specialized |
|---|---|---|
| sports-college | all | sports, wearables integration |
| arts-academy | all | studios (resource booking), portfolio, projects, exhibitions (events), critiques (selection), materials (inventory) |
| music-academy | all | lessons, practice rooms (booking), auditions (selection), recitals and ensembles (events), instruments (inventory) |
| film-media-institute | all | film projects (projects), equipment (booking), media assets, editing, screenings (events), showreel (portfolio) |
| medical-college | all | clinical rotations (field training), hospital integration, labs (booking), research, residency |
| law-college | all | moot court (selection and events), legal research (projects), clinics, internships (field training) |
| engineering-college | all | labs (booking), capstone (projects), industrial training (field training), innovation, placements |
| management-institute | all | case competitions (events), corporate relations, live projects (projects), internships, alumni |

All 15 profiles exist in `platform/identity/config/profiles/`. An organisation picks one at
registration as its academy type; that is its **academic package** inside the one application,
approved by the super admin, and the plan it is on decides how much of it is unlocked (ADR-0005).

## Roles per academy

Every academy has the common roles (applicant, student, faculty, examination staff, department
admin, finance, HR, facilities, governance, support, management, organisation admin) plus its own
learner role extending `student`, instructor role extending `faculty`, and one field staff role.
Each has a dashboard layout built from the generic modules above, named by the profile vocabulary.

| Academy | Learner | Instructor | Field staff |
|---|---|---|---|
| Sports college | Athlete | Coach | Medical staff, Nutritionist |
| Arts academy | Artist | Studio instructor | Exhibition and gallery manager |
| Design / fashion | Designer | Design mentor | Industry liaison |
| Music academy | Musician | Music teacher | Ensemble / orchestra director |
| Dance academy | Dancer | Choreographer | Production manager |
| Theatre academy | Actor | Director | Stage manager |
| Film / media | Filmmaker | Production supervisor | Equipment manager |
| Medical college | Medical student | Clinical supervisor | Hospital coordinator |
| Law college | Law student | Legal mentor | Moot court coordinator |
| Engineering college | Engineering student | Project guide | Lab in-charge |
| Management institute | Management student | Corporate mentor | Placement officer |
| Agriculture college | Field trainee | Farm supervisor | Research lead |
| Hospitality institute | Hospitality trainee | Chef / operations instructor | Industry coordinator |
| Teacher education | Teacher trainee | Mentor teacher | Practicum coordinator |
| Research university | Research scholar | Research supervisor | Research office |

## Positioning

"One Education OS platform, configured for the way each institution teaches, trains, manages
and supports its students."
