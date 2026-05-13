"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { content } from "@/lib/content";

const revenueOptions = content.diagnosticCall.options.revenue;
const sourceOptions = content.diagnosticCall.options.source;

const schema = z.object({
  name: z.string().min(2, content.diagnosticCall.errors.name),
  email: z.string().email(content.diagnosticCall.errors.email),
  phone: z.string().min(10, content.diagnosticCall.errors.phone),
  company: z.string().min(2, content.diagnosticCall.errors.company),
  revenue: z.enum(revenueOptions, {
    errorMap: () => ({ message: content.diagnosticCall.errors.revenue }),
  }),
  source: z.enum(sourceOptions, {
    errorMap: () => ({ message: content.diagnosticCall.errors.source }),
  }),
  problem: z
    .string()
    .min(20, content.diagnosticCall.errors.problemMin)
    .max(500, content.diagnosticCall.errors.problemMax),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-lg border border-border bg-paper px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/20";

export function DiagnosticCallForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (values: FormValues) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        throw new Error("Submit failed");
      }
      router.push("/grazie");
    } catch {
      setSubmitError(content.diagnosticCall.errors.generic);
    }
  };

  const fields = content.diagnosticCall.fields;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto max-w-2xl rounded-lg bg-paper p-6 shadow-lg md:p-8"
    >
      <p className="mb-6 text-sm text-muted">{content.diagnosticCall.formIntro}</p>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-ink">
            {fields.name}
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            className={inputClass}
            {...register("name")}
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-signal">{errors.name.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
            {fields.email}
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            {...register("email")}
          />
          {errors.email ? (
            <p className="mt-1 text-xs text-signal">{errors.email.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-ink">
            {fields.phone}
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            {...register("phone")}
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-signal">{errors.phone.message}</p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-ink">
            {fields.company}
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            {...register("company")}
          />
          {errors.company ? (
            <p className="mt-1 text-xs text-signal">{errors.company.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="revenue" className="mb-1 block text-sm font-medium text-ink">
            {fields.revenue}
          </label>
          <select
            id="revenue"
            className={inputClass}
            defaultValue=""
            {...register("revenue")}
          >
            <option value="" disabled>
              Seleziona…
            </option>
            {revenueOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.revenue ? (
            <p className="mt-1 text-xs text-signal">{errors.revenue.message}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="source" className="mb-1 block text-sm font-medium text-ink">
            {fields.source}
          </label>
          <select
            id="source"
            className={inputClass}
            defaultValue=""
            {...register("source")}
          >
            <option value="" disabled>
              Seleziona…
            </option>
            {sourceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.source ? (
            <p className="mt-1 text-xs text-signal">{errors.source.message}</p>
          ) : null}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="problem" className="mb-1 block text-sm font-medium text-ink">
            {fields.problem}
          </label>
          <textarea
            id="problem"
            rows={5}
            maxLength={500}
            className={inputClass}
            {...register("problem")}
          />
          {errors.problem ? (
            <p className="mt-1 text-xs text-signal">{errors.problem.message}</p>
          ) : null}
        </div>
      </div>

      {submitError ? (
        <p className="mt-4 rounded-md bg-signal/10 px-4 py-3 text-sm text-signal">
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-signal px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isSubmitting
          ? content.diagnosticCall.submitting
          : content.diagnosticCall.submit}
      </button>
    </form>
  );
}
