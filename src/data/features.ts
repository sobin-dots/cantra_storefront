export interface FeatureBenefit {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface FeatureData {
  slug: string;
  hero: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
  };
  clearerWay: {
    eyebrow: string;
    title: string;
    description: string;
    benefits: FeatureBenefit[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    description: string;
    steps: FeatureBenefit[];
  };
  whyChoose: {
    eyebrow: string;
    title: string;
    description: string;
    reasons: FeatureBenefit[];
  };
  faq: {
    title: string;
    description: string;
    questions: FAQ[];
  };
}

export const featuresData: Record<string, FeatureData> = {
  "care-plan": {
    slug: "care-plan",
    hero: {
      number: "01",
      eyebrow: "PERSON-CENTRED CARE, MADE PRACTICAL",
      title: "A care plan that lives with the person.",
      description: "Bring needs, preferences, risks and daily records together in one clear view—so every shift understands the person, not just the task."
    },
    clearerWay: {
      eyebrow: "A CLEARER WAY TO WORK",
      title: "From assessment to everyday action.",
      description: "Create a structured picture of what matters to each resident, then connect it to daily tasks, observations and handovers. Updates stay visible, accountable and easy to review.",
      benefits: [
        { title: "One joined-up record", description: "Needs, preferences, risks and outcomes stay connected." },
        { title: "Clear daily guidance", description: "Turn the plan into practical actions for each shift." },
        { title: "Progress in context", description: "See notes and outcomes alongside the care they relate to." },
        { title: "Version visibility", description: "Keep a clearer history of what changed and why." }
      ]
    },
    howItWorks: {
      eyebrow: "HOW IT WORKS",
      title: "Four simple steps. One connected flow.",
      description: "Designed to fit the working day, with clear information at each point where a decision or record matters.",
      steps: [
        { title: "Understand", description: "Capture the person's history, goals, preferences and support needs." },
        { title: "Plan", description: "Build clear actions, risk controls and review dates around those needs." },
        { title: "Deliver", description: "Guide frontline teams with the right information at the right moment." },
        { title: "Review", description: "Use notes and outcomes to keep the plan current and meaningful." }
      ]
    },
    whyChoose: {
      eyebrow: "WHY CHOOSE CARE PLAN",
      title: "Choose Care Plan when clarity matters most.",
      description: "Technology should reduce friction, support good judgement and keep important information close to the people delivering care.",
      reasons: [
        { title: "Personal by design", description: "Give individual choices and outcomes a visible place in everyday care." },
        { title: "Consistent across shifts", description: "Help every team member work from the same current plan." },
        { title: "Ready to evidence", description: "Bring actions, notes and reviews into a clearer audit trail." },
        { title: "Faster reviews", description: "Bring current needs, actions and outcomes together before every review." }
      ]
    },
    faq: {
      title: "Answers for a confident next step.",
      description: "Everything you need to understand how Care Plan can fit into everyday care.",
      questions: [
        { question: "Can plans reflect individual preferences?", answer: "Yes. Plans can bring personal routines, choices, outcomes and support needs into the same structured record." },
        { question: "How do staff know a plan has changed?", answer: "Updates and changes are flagged clearly in the daily record, ensuring handovers communicate exactly what teams need to know." },
        { question: "Can reviews be tracked?", answer: "Absolutely. Scheduled reviews and ongoing audits are tracked to ensure plans are kept completely up to date." },
        { question: "Does it support different care settings?", answer: "Yes, our structure adapts to residential, nursing, and supported living environments seamlessly." }
      ]
    }
  },
  "emar": {
    slug: "emar",
    hero: {
      number: "02",
      eyebrow: "MEDICATION RECORDS IN THE FLOW OF CARE",
      title: "Make every round clearer and more accountable.",
      description: "See what is due, what has been recorded and what needs attention—while keeping medication information connected to the wider care journey."
    },
    clearerWay: {
      eyebrow: "A CLEARER WAY TO WORK",
      title: "A safer rhythm for every medication round.",
      description: "Give staff a focused view of scheduled medication, recording outcomes as they happen. Managers gain live visibility and a traceable record without waiting for a paper audit.",
      benefits: [
        { title: "Due, now and next", description: "Keep the round focused on the right resident and time." },
        { title: "Clear outcomes", description: "Record administered, refused, omitted or not required." },
        { title: "Visible exceptions", description: "Bring missed entries and emerging issues to attention." },
        { title: "Joined-up context", description: "Keep medication information connected to daily care." }
      ]
    },
    howItWorks: {
      eyebrow: "HOW IT WORKS",
      title: "Four simple steps. One connected flow.",
      description: "Designed to fit the working day, with clear information at each point where a decision or record matters.",
      steps: [
        { title: "Prepare", description: "Review the round, priorities and any relevant resident information." },
        { title: "Confirm", description: "Check medication, timing and instructions before recording." },
        { title: "Record", description: "Capture the outcome at the point of administration." },
        { title: "Respond", description: "Escalate exceptions and review a complete, time-stamped trail." }
      ]
    },
    whyChoose: {
      eyebrow: "WHY CHOOSE EMAR",
      title: "Choose eMAR when clarity matters most.",
      description: "Technology should reduce friction, support good judgement and keep important information close to the people delivering care.",
      reasons: [
        { title: "Less uncertainty", description: "A focused view makes it easier to understand what still needs action." },
        { title: "Better oversight", description: "Managers can see progress without waiting for the round to finish." },
        { title: "Stronger records", description: "Every outcome sits in a clear, consistent medication history." },
        { title: "More confident handovers", description: "Give the next team a reliable view of completed and outstanding medication." }
      ]
    },
    faq: {
      title: "Answers for a confident next step.",
      description: "Everything you need to understand how eMAR can fit into everyday care.",
      questions: [
        { question: "What can staff record during a round?", answer: "Teams can record relevant medication outcomes such as administered, refused, omitted or not required." },
        { question: "Can managers see outstanding work?", answer: "Yes, dashboards provide real-time visibility into any missed or delayed medication administrations." },
        { question: "Does eMAR replace professional judgement?", answer: "No, it supports it by providing clear information and warnings, allowing professionals to make informed decisions." },
        { question: "Can medication records connect with daily care?", answer: "Yes, side effects or observations recorded in daily care are linked back to medication records for full context." }
      ]
    }
  },
  "staff-rota": {
    slug: "staff-rota",
    hero: {
      number: "03",
      eyebrow: "THE RIGHT PEOPLE, IN THE RIGHT PLACE",
      title: "Plan the rota around real care needs.",
      description: "Create visible schedules, clarify responsibilities and keep teams informed as the day changes—without relying on scattered spreadsheets and messages."
    },
    clearerWay: {
      eyebrow: "A CLEARER WAY TO WORK",
      title: "From staffing plan to confident shift.",
      description: "Bring availability, roles, shift coverage and day-to-day responsibilities into one shared workflow. Everyone sees the view they need, from home-wide oversight to today's personal schedule.",
      benefits: [
        { title: "Visible coverage", description: "See staffed, open and changing shifts at a glance." },
        { title: "Clear responsibilities", description: "Connect people, roles and areas for each shift." },
        { title: "Simpler coordination", description: "Keep schedule updates in one dependable place." },
        { title: "Useful oversight", description: "Spot gaps early and make informed adjustments." }
      ]
    },
    howItWorks: {
      eyebrow: "HOW IT WORKS",
      title: "Four simple steps. One connected flow.",
      description: "Designed to fit the working day, with clear information at each point where a decision or record matters.",
      steps: [
        { title: "Build", description: "Set shift patterns, roles and the coverage your service needs." },
        { title: "Assign", description: "Match available team members to the right responsibilities." },
        { title: "Share", description: "Give staff a current view of where and when they are working." },
        { title: "Adapt", description: "Respond to leave, open shifts and operational changes quickly." }
      ]
    },
    whyChoose: {
      eyebrow: "WHY CHOOSE STAFF & ROTA",
      title: "Choose Staff & Rota when clarity matters most.",
      description: "Technology should reduce friction, support good judgement and keep important information close to the people delivering care.",
      reasons: [
        { title: "Fewer moving parts", description: "Replace separate trackers and message threads with one clear rota." },
        { title: "More confident cover", description: "See staffing pressure before it becomes a problem." },
        { title: "A calmer handover", description: "Help teams begin each shift knowing where they are needed." },
        { title: "Clearer communication", description: "Keep changes visible without chasing separate messages or spreadsheets." }
      ]
    },
    faq: {
      title: "Answers for a confident next step.",
      description: "Everything you need to understand how Staff & Rota can fit into everyday care.",
      questions: [
        { question: "Can the rota show different roles and areas?", answer: "Yes. Shifts can be organised around roles, teams, areas and the coverage your service needs." },
        { question: "How are rota changes communicated?", answer: "Staff are notified immediately of any shift changes directly through their app." },
        { question: "Can managers identify gaps early?", answer: "Yes, color-coded views instantly highlight understaffed shifts or missing critical roles." },
        { question: "What do care workers see?", answer: "They get a clear, personalized schedule showing exactly when, where, and in what role they are working." }
      ]
    }
  },
  "compliances": {
    slug: "compliances",
    hero: {
      number: "04",
      eyebrow: "CONFIDENCE IN EVERY RECORD",
      title: "Keep the evidence connected.",
      description: "Turn everyday care into a clear, traceable record. Connect actions, incidents and reviews so you stay prepared for inspection without the last-minute scramble."
    },
    clearerWay: {
      eyebrow: "A CLEARER WAY TO WORK",
      title: "Governance as part of the daily flow.",
      description: "Bring compliance out of isolated folders and into everyday care. Connect policies, incidents, actions and audits so accountability is clear and the evidence is always ready.",
      benefits: [
        { title: "Follow the thread", description: "Trace what happened, what was done and what needs review." },
        { title: "Clear ownership", description: "Assign actions and track them to completion." },
        { title: "Useful oversight", description: "Turn daily activity into clearer management information." },
        { title: "Review readiness", description: "Reduce the scramble when evidence needs to be presented." }
      ]
    },
    howItWorks: {
      eyebrow: "HOW IT WORKS",
      title: "Four simple steps. One connected flow.",
      description: "Designed to fit the working day, with clear information at each point where a decision or record matters.",
      steps: [
        { title: "Record", description: "Capture care, incidents, checks and actions in a consistent way." },
        { title: "Connect", description: "Link evidence to residents, staff, policies and responsibilities." },
        { title: "Review", description: "Use live views to understand gaps, trends and overdue work." },
        { title: "Improve", description: "Assign, follow tasks and learn from what the data shows." }
      ]
    },
    whyChoose: {
      eyebrow: "WHY CHOOSE COMPLIANCES",
      title: "Choose Compliances when clarity matters most.",
      description: "Technology should reduce friction, support good judgement and keep important information close to the people delivering care.",
      reasons: [
        { title: "Evidence with context", description: "Understand not only what happened, but what followed." },
        { title: "Shared accountability", description: "Make ownership and next steps visible to the right people." },
        { title: "Continuous readiness", description: "Support everyday governance instead of last-minute preparation." },
        { title: "Less preparation time", description: "Keep evidence ready as part of everyday work, not a last-minute exercise." }
      ]
    },
    faq: {
      title: "Answers for a confident next step.",
      description: "Everything you need to understand how Compliances can fit into everyday care.",
      questions: [
        { question: "What evidence can be organised?", answer: "Operational records, audits, incidents, follow-up actions and policy-related evidence can be kept in a clearer structure." },
        { question: "Does the platform guarantee compliance?", answer: "While it doesn't guarantee compliance automatically, it creates the transparent, structured evidence trails that inspectors look for." },
        { question: "Can actions have clear owners?", answer: "Yes, every follow-up action or audit requirement can be assigned to a specific staff member with a deadline." },
        { question: "How does this help with inspections?", answer: "It allows managers to pull contextual evidence instantly rather than spending days gathering paper records." }
      ]
    }
  }
};
