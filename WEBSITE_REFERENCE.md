# Educationeers Website — Project Reference

## Overview

A static website serving as a regional hub for teachers, environmental educators, and administrators in **Northern New England (NNE)** to discover, share, and collaborate on **Place Based Learning (PBL)** resources and success stories.

**Inspired by:** [code.org](https://code.org) — a loosely connected curriculum support network that bridges teachers, districts, and policy makers across states.

---

## The Problem

Teachers, administrators, and policy makers in Northern New England want to give students more agency through Place Based Learning, but face three key barriers:

1. **Overwork** — they are already stretched thin and don't have time to search for resources
2. **Lack of region-specific resources** — generic national resources don't reflect NNE's local context, ecosystems, and communities
3. **Isolation** — educators who try to start PBL initiatives often feel siloed, with no community or network to connect to

---

## The Solution

A static website that acts as a **central hub** where educators and organizations can:

- Discover region-specific resources (curriculum, grants, experts, organizations)
- Read and share success stories (both curricular and extracurricular)
- Connect with like-minded educators and organizations in NNE
- Find policy examples and grant funding to support their work

---

## Target Audience

| Audience | Primary Need |
|---|---|
| K-12 teachers | Curriculum ideas, outside experts, grant funding |
| Environmental educators at local orgs | Visibility, collaboration, resource sharing |
| School administrators | Policy examples, funding, staff support |
| Students | Awareness of clubs, internships, camps |
| Parents | Understanding of available programs |
| Local/state policy makers | Research evidence, policy templates |
| Academics and activists | Research connections, visibility for their work |

---

## Site Structure & Pages

### Pages
| Page | Notes |
|---|---|
| Home | Includes a Submit/Contribute section; "Submit" button also in nav bar |
| Research | Standalone page |
| Current Projects | One page with two sections: Curricular and Extracurricular |
| Curricular Resources | Accessed via Resources dropdown |
| Extracurricular Resources | Accessed via Resources dropdown |
| Professional Development | Accessed via Resources dropdown; mix of local workshops, trainings, online courses/certifications, and regional events |
| Grants | Accessed via Resources dropdown; all grant types (curricular, extracurricular, community orgs) |
| About Us | Standalone page |
| 404 Error | Custom page — compass/navigation themed |

**No password or login required on any page.**

### Navigation & Layout Shell

**Header:**
- Logo (top left) — links back to homepage
- Nav bar scrolls away with the page (not sticky)
- Nothing else in the header (no search bar, no social icons)

**Footer:**
- Educationeers logo + site name
- © 2026 Educationeers
- Repeated navigation links
- Submit a Resource button

### Navigation bar structure
```
Home | Research | Current Projects ▾ | Resources ▾ | About Us | [Submit a Resource]
                          ↓                    ↓
                  Curricular Projects   Curricular Resources
                  Extracurricular       Extracurricular Resources
                  Projects              Professional Development
                                        Grants
```
Both "Current Projects" and "Resources" are dropdowns only — neither links to its own standalone page.

---

## Grants Page (Resources → Grants)

**Card fields:** Resource Type, Title, Summary, Organization, Amount, Location, Link (Amount field instead of Date)

**Filters:** by Resource Type, by State/Location

**Entries at launch (6):**

| Resource Type | Title | Organization | Amount | Location | Link |
|---|---|---|---|---|---|
| Classroom teacher grant | Grants in Place | Rural Schools Collaborative | Up to $2,500 | National | [link](https://ruralschoolscollaborative.org/programs/grants-in-place) |
| Classroom teacher grant | Schoolyard Habitat Grants | NH DOE | $1,000–$5,000 | NH | [link](https://www.wildlife.nh.gov/education/schoolyard-habitat-grants) |
| Classroom teacher grant | WE NHEEd to Get Outside Grant | NH Environmental Educators | $200–$2,000 | NH | [link](https://nhee.org/about-us/we-nheed-to-get-outside-grant/) |
| Classroom teacher grant | Wellborn Ecology Fund — School-based Project Grants | NH Charitable Foundation | Up to $5,000 | Upper Valley, NH/VT | [link](https://www.nhcf.org/how-can-we-help-you/apply-for-a-grant/wellborn/) |
| Classroom teacher grant | Educator Mini-grants | Lake Champlain Basin Program | Up to $1,000 | VT | [link](https://www.lcbp.org/about-us/grants-rfps/request-for-proposals-rfps/) |
| Classroom teacher grant | Mini Grants for Outdoor Learning | Maine Environmental Education Association | Up to $1,500 | ME | [link](https://www.meeassociation.org/minigrants-for-outdoor-learning) |

---

## Professional Development Page (Resources → Professional Development)

**Card fields:** Resource Type, Title, Summary, Organization, Date, Location, Link (Date field included for this page)

**Filters:** by Resource Type, by State/Location, by Date/Season

**Entries at launch (10):**

| Resource Type | Title | Organization | Date | Location | Link |
|---|---|---|---|---|---|
| Conference | In Bloom in Vermont / In Bloom in Maine | Antioch University | May 16 (VT), May 30 (ME) | Norwich VT / Rockport ME | [link](https://continuinged.antioch.edu/course-category/IB/) |
| Summer retreat | VEEP Summer Institute | Vermont/NH Energy Education Program | June 22–26, 2026 | Squam Lake, NH | [link](https://veep.org/summerinstitute/) |
| Certificate course | Education for Sustainability Certificate | Shelburne Farms | Mostly summer | VT | [link](https://shelburnefarms.org/educators/professional-learning) |
| Workshop | Growing Up Wild Workshop | Project Wild / Assoc. of Fish & Wildlife Agencies | June 10, 2026 | Hollis, NH | [link](https://nhee.org/mec-events/growing-up-wild-educator-workshop/) |
| Workshop series | Learning in Place | Teton Science Schools | Anytime | Jackson, WY | [link](https://www.tetonscience.org/educational-consulting/at-your-school-or-location/) |
| Asynchronous course | Interdisciplinary Instruction Professional Learning | Maine DOE | Anytime | ME | [link](https://www.maine.gov/doe/learning/II/PL) |
| Workshop series | Supporting Nature-Based Teaching | Harris Center for Conservation Education | Summer 2026 | Hancock, NH | [link](https://harriscenter.org/programs-and-education/school-programs/professional-development) |
| Workshop series | Nature-Based Summer Immersion Courses for Teachers | North Branch Nature Center | Summer courses | Montpelier, VT | [link](https://northbranchnaturecenter.org/adult-programs/educator-institutes) |
| Conference | Maine Environmental Education Association Conference | Maine Environmental Education Association | Annual in May | West Gardiner, ME | [link](https://www.meeassociation.org/annual-conference) |
| Workshop series | Powering Up Professional Development Workshops | Vermont/NH Energy Education Program | Summer courses | NH/VT | [link](https://veep.org/poweringupworkshops/) |

---

## Extracurricular Resources Page (Resources → Extracurricular Resources)

**Card fields:** Resource Type, Title, Summary, Organization, Location, Link

**Filters:** by Resource Type, by State/Location

**Entries at launch (8):**

| Resource Type | Title | Organization | Location | Link |
|---|---|---|---|---|
| Field trips, activities | Place-Based Education | Shelburne Farms | Vermont | [link](https://shelburnefarms.org/educators/resources/resource-topics/place-based-education) |
| Field trips, activities | Field Trips and School Programs | Squam Lakes Science Center | NH | [link](https://nhnature.org/teachers/) |
| Field trips, activities | Place-Based Education & Learning at Horatio Colony Nature Preserve | Horatio Colony / Antioch University | NH | [link](https://www.antioch.edu/centers-institutes/horatio-colony-nature-preserve/) |
| Field trips, activities | School Programs | NH Audubon | NH | [link](https://nhaudubon.org/education/school-programs/) |
| Field trips, activities | Hands-on Science Learning for Schools | Bonnyvale Environmental Education Center | VT/NH | [link](https://beec.org/for-schools/) |
| Activism guide | Youth Climate Action Toolkit | This is Planet Ed (Aspen Institute) | National | [link](https://www.thisisplaneted.org/resources/youth-climate-action-toolkit) |
| Guides and activities | Resources for Social Justice Teaching & Learning | Inside-Outside, Antioch University | NH | [link](https://www.insideoutside.org/socialjustice) |
| Afterschool course | High School Marine Ecology Course | North Branch Nature Center | VT | [link](https://northbranchnaturecenter.org/youth-programs/marine) |

---

## Curricular Resources Page (Resources → Curricular Resources)

**Card fields:** Resource Type, Title, Summary, Organization, Location, Link

**Filters:** by Resource Type, by State/Location

**Entries at launch (15):**

| Resource Type | Title | Organization | Location | Link |
|---|---|---|---|---|
| K-12 curriculum | The Nature Lab | The Nature Conservancy | National | [link](https://www.nature.org/en-us/about-us/who-we-are/how-we-work/youth-engagement/nature-lab/) |
| K-12 curriculum | Place-Based Education | Shelburne Farms | Vermont | [link](https://shelburnefarms.org/educators/resources/resource-topics/place-based-education) |
| K-12 curriculum | Lesson Plans from Classroom Teachers | Place Based Education in the Monadnock Region | NH | [link](https://monadnockpbe.weebly.com/from-classroom-teachers.html) |
| K-12 partner project | USDA Farm to School | The Cornucopia Project | NH | [link](https://cornucopiaproject.org/usda-farm-to-school/) |
| K-12 curriculum | Educational Resources - Lesson Plans | NH Audubon | NH | [link](https://nhaudubon.org/education/educational-resources/) |
| NGSS standards | Schoolyard Habitats and Outdoor Classrooms – Connections to NGSS | NH Fish & Game Wildlife Education | NH | [link](https://www.wildlife.nh.gov/sites/g/files/ehbemt746/files/inline-documents/sonh/ngss-science-standards.pdf) |
| K-12 curriculum | Project Learning Tree Curriculum | Project Learning Tree | NH | [link](https://nhplt.org/plt-curriculum/) |
| K-12 curriculum | NH Specific Resources | Project Learning Tree | NH | [link](https://nhplt.org/nh-specific-current-resources/) |
| K-12 curriculum | Outdoors in Winter | Inside-Outside, Antioch University | VT | [link](https://www.insideoutside.org/outdoors-in-winter) |
| K-12 curriculum | Resources for Teachers | Harris Center for Conservation Education | NH | [link](https://harriscenter.org/programs-and-education/school-programs/teacher-resources) |
| K-12 curriculum | 13 Moons Unit: Lesson Plans | Indigenous New Hampshire Collaborative Collective | NH | [link](https://indigenousnh.com/educational-resources/) |
| K-12 partner project | ECO - Educating Children Outdoors | North Branch Nature Center | VT | [link](https://northbranchnaturecenter.org/youth-programs/eco) |
| K-12 curriculum | Outdoor Lessons in Science, Math, and Literacy | Educate Outside | National | [link](https://www.educateoutside.com/) |
| K-12 curriculum | The Soil Story Curriculum | Kiss the Ground Regenerative Farmers | National | [link](https://kisstheground.com/wp-content/uploads/2020/04/Soil-Story-Curriculum_200212.pdf) |
| K-12 curriculum | SubjectToClimate's Lessons, Units, and Activities | Maine Climate Hub / Subject to Climate | ME | [link](https://maineclimatehub.org/lesson-plans) |

---

## Extracurricular Projects Page (Current Projects → Extracurricular)

**Card fields:** Resource Type, Title, Summary, Organization, Location, Link

**Filters:** by Resource Type, by State/Location

**Entries at launch (6):**

| Resource Type | Title | Organization | Location | Link |
|---|---|---|---|---|
| Conference (annual) | Youth Climate Leaders Academy | NHEEP/VEEP | NH/VT | [link](https://veep.org/ycla/) |
| Conference | Findings from the Field Symposium | Gulf of Maine Research Institute | Portland, ME (+NH) | [link](https://www.gmri.org/stories/findings-from-the-field-symposium-highlights-the-power-of-student-science/) |
| Storytelling project | The Listen Project | Maine Environmental Education Association | ME | [link](https://storymaps.arcgis.com/stories/e9d7037e31b24d43b5213eb761701810) |
| Advocacy group | Wabanaki Policy Youth Initiative | Maine Environmental Education Association | ME | [link](https://www.meeassociation.org/wpyi) |
| Conference | Spring Changemakers Gathering | Maine Environmental Education Association | Lewiston, ME | [link](https://www.meeassociation.org/changemakers-gathering-1) |
| Competition | Community Changemaker Challenge | Design Challenge Network/UNH | NH | [link](https://www.designchallengenetwork.org/community-changemaker-challenge) |

---

## Curricular Projects Page (Current Projects → Curricular)

**Card fields:** Resource Type, Title, Summary, Organization, Location, Link (no Date field)

**Filters:** by Resource Type, by State/Location

**Note:** Nearby-but-not-strictly-NNE entries (e.g., Boston, MA) are acceptable

**Entries at launch (8):**

| Resource Type | Title | Organization | Location | Link |
|---|---|---|---|---|
| State policy | Place Based Learning | Maine DOE | ME | [link](https://www.maine.gov/doe/learning/II/Place) |
| State policy implemented at local level | Extended Learning Opportunities | NH DOE | NH | [link](https://www.education.nh.gov/who-we-are/division-of-education-and-analytic-resources/bureau-educational-opportunities/learn-everywhere) |
| Classroom PBL | 2022 Place-Based Educators Spotlight | Place Based Education in the Monadnock Region | NH | [link](https://monadnockpbe.weebly.com/examples-of-place-based-education.html) |
| Classroom PBL example | Place-Based Learning Land Use Analysis | Hartford School District / Teton Schools | VT | [link](https://ruralschoolscollaborative.org/stories/place-based-learning-land-use-analysis) |
| Partnership classroom program | Maine Solutionaries | Institute for Humane Education | ME | [link](https://www.canva.com/design/DAGr1BZaxSo/6DaL9Ypd-glYSO-03NDO0g/view) |
| CTE and HS classes | Community and Climate Resilience Through Agriculture, Forestry and Technology | Woodstock Union High School | Woodstock, VT | [link](https://23sheere04.edublogs.org/) |
| HS classes | Project Based Learning | Franklin High School | Franklin, NH | [link](https://www.sau18.nh.gov/o/fhs/documents/accelerated-learning/project-based-learning/16315242) |
| HS classes | Career and Technical Education Program in Environmental Science | Boston Green Academy | Boston, MA | [link](https://www.bostongreenacademy.org/enviroscience-pathway) |

---

## Website Content Sections

### 1. Academic Research on Place Based Learning
- Overview of the evidence base for PBL
- Local studies (NNE-specific research)
- Global/national studies (e.g., SustainableED)
- Key takeaways written accessibly for non-academic audiences

### 2. Curricular Projects in NNE *(Success Stories)*
Highlighting what is already happening inside schools:
- Classes being taught that incorporate Place Based Learning
- Gardens and outdoor classrooms
- Field trips with educational framing
- Traveling expert educators who visit schools

### 3. Extracurricular Projects in NNE *(Success Stories)*
Highlighting what is already happening outside the school day:
- Student clubs focused on environment/nature
- Internships with local organizations
- Camps (outdoor ed, environmental, nature-based)

### 4. Resources for Curricular Projects
Tools and support for teachers and administrators:
- Class curricula and alignment to academic standards
- Outside organizations that can come into schools
  - Experts available to consult or speak with classes
- Place Based Learning policy examples for school boards and state-level adoption
- Grant funding sources (organizations and government)

### 5. Resources for Extracurricular Projects
Tools and support for clubs, camps, and community programs:
- Project templates and timelines
- Grant funding sources (organizations and government)
- Experts who can speak to clubs or youth groups
- Job and internship opportunities in camps or outdoor education

---

## Core Goals

1. **Reduce friction for educators** — the site should give teachers and administrators *less* work, not more. Everything should be easy to find, clearly organized, and immediately usable.

2. **Build a regional network** — replicate the model of loosely connected curriculum support (like code.org did for computer science) across NNE school districts and states.

3. **Bridge all stakeholder groups** — serve teachers, administrators, policy makers, and community organizations from a single hub so no one feels siloed.

4. **Be region-specific** — focus on Northern New England (Maine, Vermont, and New Hampshire) to ensure relevance and local credibility.

---

## Site Identity

| Field | Answer |
|---|---|
| Official name | Educationeers |
| Format | One word, capitalized as "Educationeers" |
| Tagline | "A Hub for Place Based Learning in Northern New England" |
| Logo | Custom compass rose logo (provided). Off-white/cream background, dark brown text in wide-spaced caps, sage green and dark brown compass rose illustration. |
| Domain | educationeers.org |
| Longevity | Real, permanent site — will continue and grow after the semester with other contributors |

---

## Research Page

**Page title:** Research

**Intro paragraph:** "Studies and theory from academics in education and place-based learning." (to be written in full during build)

**Display format:** Cards — one per study

**Each card shows:**
- Title
- Author(s)
- Year published
- 1-sentence plain-language summary
- Local (NNE) / National designation
- Link to full study
- Image — study cover/title page if available

**Filters at top of page (dropdowns):**
- Local or National
- Year
- Type of research (categories TBD — Florence will provide with spreadsheet)

**Page sections:** None — all studies in one list, filtered by dropdowns

**Primary audience:** Teachers convincing administrators; administrators convincing policy makers

**Launch count:** 12 studies

**Filter options (type of research):**
- Article — lit review
- Article — study
- Article — theory
- Book — theory
- Report

**Local (NNE) vs. National/Global designation:**
- Local NNE: Vermont (1), New Hampshire (3) = 4 studies
- National/Global: 8 studies

**Studies at launch:**

| Type | Title | Author/Org | Location | Year | Link |
|---|---|---|---|---|---|
| Article - lit review | Full article: Place-based education – a systematic review of literature | Educational Review Journal - Univ. of Tel Aviv | Global | 2025 | [link](https://www.tandfonline.com/doi/full/10.1080/00131911.2023.2177260) |
| Article - study | Place-Based Education in the Standards-Based Reform Era—Conflict or Complement? | American Journal of Education - UVM | Vermont | 2005 | [link](https://www.journals.uchicago.edu/doi/10.1086/444522) |
| Article - theory | Place-Based Education: Learning to Be Where We Are | Univ. of Texas Rio Grande Valley | National | 2002 | [link](https://scholarworks.utrgv.edu/cgi/viewcontent.cgi?article=1019&context=histamarticles) |
| Book - theory | Moral Principles in Education | John Dewey | National | 1909 | [link](https://www.gutenberg.org/files/25172/25172-h/25172-h.htm#chapter_4) |
| Article - study | The Prairie Science Class: A Model for Re-Visioning Environmental Education | Human Dimensions of Wildlife Journal | Minnesota | 2006 | [link](https://www.tandfonline.com/doi/full/10.1080/10871200600803010) |
| Article - lit review | Do Experiences With Nature Promote Learning? Converging Evidence | Frontiers in Psychology Journal | Global | 2019 | [link](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2019.00305/full) |
| Article - study | Interdisciplinary nature journaling improves mood and helps build connection in middle school students | Environmental Education Research Journal | New York | 2024 | [link](https://www.tandfonline.com/doi/full/10.1080/13504622.2024.2405901) |
| Article - study | School-based outdoor education and teacher subjective well-being | Frontiers in Education Journal | Quebec, CA | 2022 | [link](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2022.961054/full) |
| Article - study | Place-Based Learning As An Effective Methodology For Developing Self-Efficacy Skills In Students With Learning Disabilities | Digital Univ. of New England | NH | 2019 | [link](https://dune.une.edu/cgi/viewcontent.cgi?article=1243&context=theses) |
| Book - theory | Place-Based Education, Connecting Families and Classrooms | David Sobel, Antioch Univ. | NH | 2004 | [link](https://www.davidsobelauthor.com/place-based-education) |
| Report | The Benefits of Place-based Education (PEEC Report) | Place-based Education Evaluation Collaborative | NH | 2010 | [link](https://monadnockpbe.weebly.com/uploads/1/1/1/5/111550055/benefits_of_place-based_education.pdf) |
| Report | Place-Based Education 2024-25 Annual Report | Teton Science Schools | Global | 2025 | [link](https://www.tetonscience.org/place-based-education-2024-25-annual-report/) |

---

## Homepage

**Sections in order (top to bottom):**

1. **Hero** — full-width photo (provided): three children examining a container of pond water with aquatic plants and a frog, outdoors beside a pond with lush NNE green vegetation. Headline overlaid on photo: "A Hub for Place Based Learning in Northern New England." No buttons.

2. **Mission statement section** — below the photo, on cream background:
   "We are Educationeers, connecting and empowering Place Based Learning across K-12 schools in Northern New England. Find examples of schools who are leading the change in PBL and resources for your school to engage in your community, motivating students with hands-on work and solving problems around you all at once."

3. **Navigation cards** — 3 cards, each showing the main area title and its sub-page links:
   - **Research** → links to Research page
   - **Current Projects** → sublinks: Curricular Projects, Extracurricular Projects
   - **Resources** → sublinks: Curricular Resources, Extracurricular Resources, Professional Development, Grants

4. **Submit / Contribute section** — encouraging educators to share their stories or resources

5. **Footer**

---

## Mission & Messaging

**One-sentence description (for a teacher who's never heard of it):**
"This is a website that provides resources for teachers and administrators in Northern New England to use and implement Place Based Learning into their schools and classrooms — it includes demonstrations of schools that have successfully implemented PBL, and grants and resources for teachers and schools looking to do the same."

**Primary audience:** K-12 teachers

**How visitors should feel:** Like they are part of a friendly community

**Tone:**
- Conversational and warm
- Proudly local and regional
- Not clinical, not overly academic, not politically charged

**Words and phrases to use:** "place based," "local," "Northern New England," "community," "K-12," "PBL"

**Words and phrases to avoid:** "climate change," "anti-poverty," "anti-racism," "social justice" — avoid any language that could read as politically charged to teachers or administrators

**Mission statement (to be displayed prominently on the site):**
> "We are Educationeers, connecting and empowering Place Based Learning across K-12 schools in Northern New England. You can find examples of schools who are leading the charge in PBL, and resources for your school to engage in your community, motivating students with hands-on work and solving problems around you all at once."

---

## Visual Identity — Colors

| Role | Color | Notes |
|---|---|---|
| Background | Warm cream | Same cream as the logo background — sampled from logo file at build time |
| Primary / buttons / links | Dark brown | Same dark brown as the logo text and compass points |
| Accent | Sage green | Same sage green as the compass rose highlights |

- Palette is exactly three colors — cream, dark brown, sage green
- Light mode only — no dark mode
- Exact hex values to be sampled from the logo file when building

---

## Visual Identity — Typography

- **Feel:** Warm and friendly — community blog, not academic or corporate
- **Headings and body:** Same font family for both (no contrast between them)
- **Size:** Generous — bigger text, more line spacing, easy to read at a desk
- **Font preference:** None specified — recommended at build time: **Nunito** or **DM Sans** (both warm, rounded, highly readable, free on Google Fonts)

---

## Visual Identity — Imagery & Icons

- **No icons** in the navigation bar or anywhere on the site
- **Photos provided so far:** hero photo (children examining pond life), logo
- **Stock photos:** not needed — using real photos only
- **Photos provided for use as headers/backgrounds:**
  1. Hero photo: three children examining pond life in a container, outdoors beside a NNE pond
  2. Three people (students + adult) walking a wooden boardwalk trail through a spruce/pine bog, blue sky
  3. Three students with backpacks on a forest trail, lake visible through trees in background
  4. Adirondack chair in open lawn with NNE mountain (NH/VT) and pine trees in background — peaceful
  5. Fall foliage NNE hillside view, mountains in distance, deep blue sky with moon visible

---

## Visual Identity (Preliminary — from logo)

The logo establishes a strong starting point for the color palette and tone:
- **Background:** off-white / warm cream (the logo background color)
- **Primary color:** dark brown / charcoal (text, compass points)
- **Accent color:** sage / mint green (compass rose highlights)
- **Overall feel:** warm, earthy, outdoorsy, navigational — not corporate, not clinical

*(Full visual identity decisions recorded in Steps 11–13)*

---

## Technical Constraints and Goals

- **Static website** — no backend/database required; all content is hardcoded or file-based
- **Free deployment** — deploy on a free static hosting platform (e.g., GitHub Pages, Netlify, or Vercel)
- **Custom domain** — educationeers.org
- **No prior coding experience** — implementation should use simple, beginner-friendly HTML/CSS
- **Final project** — for a college-level Education and Environmentalism course, but intended to be permanent

---

## About Us Page

**Page text (as written by Florence):**

> We are local students, educators, and problem-solvers who are passionate about connecting students with their communities in order to engage them in local issues and create career pathways into local economies. We have seen place based learning positively impact our communities and are committed to highlighting and expanding this work across the beautiful region of Northern New England.
>
> This website was made by Flo Dapice, a student of Education at Brown University (class of 2029), and a 2025 graduate of Hopkinton High School in New Hampshire. To get in touch, email Flo at florencedapice@gmail.com.

**Contact email:** florencedapice@gmail.com

---

## Deployment & Domain

| Field | Answer |
|---|---|
| Domain | educationeers.org |
| Domain registrar | Squarespace Domains (login needed to connect — Florence will retrieve) |
| Hosting | GitHub Pages (free) |
| GitHub account | Florence has one |
| Update guide | Yes — include a plain-English guide for adding/editing content after launch with no coding knowledge |

**DNS note:** Connecting educationeers.org to GitHub Pages requires adding DNS records in the Squarespace domain dashboard. Steps will be included in the project.

---

## Key Terms

| Term | Definition |
|---|---|
| PBL | Place Based Learning — learning that is rooted in the local community, environment, and culture |
| NNE | Northern New England — Maine, Vermont, and New Hampshire |

