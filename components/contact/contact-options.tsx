"use client";

import { Headset, MessageCircle, Rocket } from "lucide-react";
import { ContactCard } from "@/components/contact/contact-card";

interface ContactOptionsProps {
  onStartTrialClick: () => void;
}

export function ContactOptions({ onStartTrialClick }: ContactOptionsProps) {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-20 lg:px-14">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <ContactCard
          icon={MessageCircle}
          title="Talk to Sales"
          description="Schedule a personalized product walkthrough with our team."
          ctaLabel="Talk to Sales"
          ctaHref="#contact-form"
        />
        <ContactCard
          icon={Rocket}
          title="Start Free Trial"
          description="Create your workspace immediately and explore AIGENTIC Flows hands-on."
          ctaLabel="Start Free Trial"
          ctaHref="#"
          onCtaClick={onStartTrialClick}
        />
        <ContactCard
          icon={Headset}
          title="Support"
          description="Already a customer? Contact our support team for help."
          ctaLabel="Contact Support"
          ctaHref="#"
        />
      </div>
    </section>
  );
}
