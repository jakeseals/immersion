# Sanity Content Setup

## Option 1: Add Content via Sanity Studio (Recommended)

1. Start your development server:
   ```powershell
   npm run dev
   ```

2. Navigate to http://localhost:3000/studio

3. For each session, click "Create" and add the following:

### Session 1: The Psychology of Emotions
- **Session Number**: 1
- **Title**: The Psychology of Emotions
- **Slug**: psychology-of-emotions (auto-generated)
- **Description**: Exploring the intricate world of human emotions and their psychological foundations with 7th and 8th grade students.
- **Learning Objectives**:
  - Understand the basic neurological basis of emotions
  - Identify and differentiate between primary and secondary emotions
  - Explore emotional intelligence and its practical applications
  - Analyze how emotions influence decision-making and behavior
- **Is Published**: ✓ (checked)

### Session 2: Audiology: The Journey of Sound
- **Session Number**: 2
- **Title**: Audiology: The Journey of Sound
- **Slug**: audiology-journey-of-sound
- **Description**: An immersive exploration of sound, hearing, and the fascinating field of audiology with 11th grade students.
- **Learning Objectives**:
  - Understand the anatomy and physiology of the human ear
  - Explore how sound waves are processed and interpreted by the brain
  - Learn about hearing loss prevention and audiological interventions
  - Investigate careers in audiology and related healthcare fields
- **Is Published**: ✓ (checked)

### Session 3: Nanoscience and Engineering
- **Session Number**: 3
- **Title**: Nanoscience and Engineering
- **Slug**: nanoscience-engineering
- **Description**: Diving into the microscopic world of nanoscience and its revolutionary engineering applications with 9th and 10th grade students.
- **Learning Objectives**:
  - Grasp the scale and significance of nanotechnology
  - Explore current applications in medicine, electronics, and materials science
  - Understand the ethical considerations of nanoscale engineering
  - Engage with hands-on demonstrations of nanoscale phenomena
- **Is Published**: ✓ (checked)

### Session 4: Astrophysics: Exploration of Dark Matter
- **Session Number**: 4
- **Title**: Astrophysics: Exploration of Dark Matter
- **Slug**: astrophysics-dark-matter
- **Description**: Venturing into the cosmic unknown to understand one of the universe's greatest mysteries with 11th and 12th grade students.
- **Learning Objectives**:
  - Understand the evidence for dark matter's existence
  - Explore current theories and detection methods
  - Analyze the role of dark matter in galactic formation and evolution
  - Discuss the implications for our understanding of the universe
- **Is Published**: ✓ (checked)

## Option 2: Import via Sanity CLI

If you prefer to import the data programmatically:

```powershell
# Install Sanity CLI globally if you haven't
npm install -g @sanity/cli

# Navigate to the sanity directory
cd sanity

# Import the data
sanity dataset import ../sanity-seed-data.json production --replace
```

## Adding Rich Content

After creating the basic sessions, you can enhance them by:

1. **Hero Images**: Upload engaging images related to each topic
2. **Content Blocks**: Add rich text with headings, paragraphs, images
3. **Gallery**: Add photo galleries from classroom activities
4. **Branch Paths**: Link related sessions together

## Viewing Your Content

Once added, your content will be immediately available at:
- http://localhost:3000/sessions/1
- http://localhost:3000/sessions/2
- http://localhost:3000/sessions/3
- http://localhost:3000/sessions/4

And on the homepage at:
- http://localhost:3000
