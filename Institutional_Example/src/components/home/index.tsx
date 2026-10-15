const navItems = ['Início', 'Sobre', 'Serviços', 'Contato']

const advantages = [
  {
    title: 'Plano individualizado',
    icon: 'plan',
  },
  {
    title: 'Cuidado acolhedor',
    icon: 'shield',
  },
  {
    title: 'Evolução acompanhada',
    icon: 'heart',
  },
]

const serviceCards = [
  {
    id: '01',
    title: 'Fisioterapia ortopédica',
    description: 'Atenção especializada para dores e limitações do movimento.',
    bullets: ['Avaliação funcional', 'Exercícios terapêuticos', 'Acompanhamento individual'],
    icon: 'movement',
  },
  {
    id: '02',
    title: 'Reabilitação',
    description: 'Suporte para retomar atividades com mais confiança e segurança.',
    bullets: ['Recuperação pós-lesão', 'Mobilidade e força', 'Plano conforme seus objetivos'],
    icon: 'recovery',
  },
  {
    id: '03',
    title: 'Prevenção e movimento',
    description: 'Cuidados para manter o corpo ativo no dia a dia e no esporte.',
    bullets: ['Orientação de exercícios', 'Consciência corporal', 'Hábitos de movimento'],
    icon: 'plan',
  },
]

function ClinicIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.9A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z" />
      <path d="M7.5 12h3l1.5-3 2 6 1.5-3h1" />
    </svg>
  )
}

function PlanIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 4.75h10a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 17 19.75H7A2.25 2.25 0 0 1 4.75 17.5V7A2.25 2.25 0 0 1 7 4.75Z" />
      <path d="M8 8.5h8M8 12h8M8 15.5h5" />
    </svg>
  )
}

function ShieldIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3.5 18.5 6v5.2c0 4.3-2.7 7.9-6.5 9.3-3.8-1.4-6.5-5-6.5-9.3V6L12 3.5Z" />
      <path d="m9.5 12.5 1.7 1.7 3.3-4.2" />
    </svg>
  )
}

function HeartIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
    </svg>
  )
}

function MovementIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="4.5" r="2" />
      <path d="m10.5 9 2.5 2 3.5-1M10.5 9 8 13l-3 1M13 11l-1 4 3 3M12 15l-4 4" />
    </svg>
  )
}

function RecoveryIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 11a8 8 0 0 0-14.8-4L3 10" />
      <path d="M3 5v5h5M4 13a8 8 0 0 0 14.8 4L21 14" />
      <path d="M21 19v-5h-5" />
    </svg>
  )
}

function SendArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h12" />
      <path d="m13 7 5 5-5 5" />
    </svg>
  )
}

function SocialIcon({ kind }: { kind: 'instagram' | 'facebook' | 'whatsapp' }) {
  const common = 'h-4 w-4'
  const paths = {
    instagram: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
        <circle cx="12" cy="12" r="4.3" />
        <circle cx="17.3" cy="6.7" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
    facebook: (
      <>
        <path d="M13.4 20v-7.8h2.6l.4-3.1h-3V7.1c0-.9.3-1.5 1.6-1.5H16V2.8c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.9v2.4H8v3.1h2.1V20h3.3Z" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M6.5 17.6 7 14.8A7.3 7.3 0 1 1 18 9.5a7.1 7.1 0 0 1-11.5 8.1Z" />
        <path d="M9.2 8.7c.2-.4.4-.4.7-.5.2-.1.5 0 .8.5l.3.7c.1.3 0 .6-.2.8l-.3.3c-.1.1-.2.3-.1.5.4.8 1.1 1.5 1.9 2 .2.1.4.1.5-.1l.3-.3c.2-.2.5-.3.8-.2l.7.3c.4.2.5.6.4.8-.3 1.2-1.5 2.1-2.9 2.1-1.2 0-2.3-.7-3.6-1.9a11.8 11.8 0 0 1-2.1-3.1c-.5-1.1-.1-2.4.9-3.1Z" />
      </>
    ),
  }

  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0c3d36]/20 bg-white text-[#0d3d36]">
      <svg viewBox="0 0 24 24" fill={kind === 'facebook' ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={common}>
        {paths[kind]}
      </svg>
    </span>
  )
}

function Home() {
  return (
    <div className="min-h-screen bg-[#f4f1ee] text-[#1d2d2c]">
      <div className="mx-auto max-w-295 px-4 py-8 md:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4 border-b border-[#0d3d36]/10 pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f7f3ef] text-[#0d3d36] shadow-[inset_0_0_0_1px_rgba(13,61,54,0.12)]">
              <ClinicIcon className="h-4 w-4" />
            </div>
            <span className="font-secondary text-[1.7rem] leading-none text-[#0d3d36]">Viva Movimento</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className={`relative text-sm font-medium text-[#23463f] transition hover:text-[#0d3d36] ${item === 'Início' ? 'text-[#0d3d36]' : ''}`}
              >
                {item}
                {item === 'Início' && <span className="absolute -bottom-5 left-0 h-0.5 w-full bg-[#0d3d36]" />}
              </a>
            ))}
          </nav>

          <button className="inline-flex items-center gap-2 rounded-xl bg-[#0d3d36] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(13,61,54,0.18)] transition hover:bg-[#0c322f]">
            Agendar avaliação
            <SendArrowIcon className="h-4 w-4" />
          </button>
        </header>

        <main>
          <section className="grid items-center gap-8 py-10 md:grid-cols-[1.05fr_1.15fr] md:py-12">
            <div className="max-w-135">
              <h1 className="font-secondary text-[4.2rem] leading-[0.9] tracking-[-0.06em] text-[#0f2b2b] md:text-[5rem]">
                Mais movimento,
                <br />
                mais bem-estar
              </h1>

              <p className="mt-6 max-w-107.5 text-[1.05rem] leading-8 text-[#496564]">
                Fisioterapia com cuidado individualizado para você se movimentar melhor e viver com mais bem-estar.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0d3d36] px-5 py-3.5 text-base font-semibold text-white shadow-[0_10px_18px_rgba(13,61,54,0.16)] transition hover:bg-[#0b322e]">
                Agendar avaliação
                <SendArrowIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#d9d1ca] bg-[#d9d1ca] shadow-[0_26px_48px_rgba(42,29,20,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
                alt="Profissional de saúde conversando com uma paciente"
                className="h-125 w-full object-cover"
              />
            </div>
          </section>

          <section className="mt-8 grid gap-4 border-t border-[#0d3d36]/10 pt-6 md:grid-cols-3">
            {advantages.map(({ title, icon }) => {
              const Icon =
                icon === 'plan'
                  ? PlanIcon
                  : icon === 'shield'
                    ? ShieldIcon
                    : HeartIcon

              return (
                <div
                  key={title}
                  className="flex items-center gap-3 rounded-2xl border border-[#0d3d36]/10 bg-[#f7f3f1] px-6 py-5 text-[#1a3735]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0d3d36]/20 bg-white text-[#0d3d36]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[1.05rem] font-medium">{title}</span>
                </div>
              )
            })}
          </section>

          <section className="mt-16 pb-8">
            <div className="mb-7 flex items-center gap-4">
              <span className="inline-block h-0.5 w-10 bg-[#d76541]" />
              <span className="text-xs font-bold tracking-[0.22em] text-[#d76541] uppercase">Nossos serviços</span>
            </div>

            <h2 className="font-secondary text-[3.6rem] leading-none tracking-[-0.06em] text-[#0f2b2b] md:text-[4rem]">
              Cuidado que acompanha você
            </h2>

            <p className="mt-4 max-w-205 text-[1.02rem] leading-8 text-[#496564]">
              Cada pessoa tem uma história e objetivos diferentes. Por isso, começamos com uma avaliação e construímos o cuidado junto com você.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {serviceCards.map(({ id, title, description, bullets, icon }) => {
                const Icon = icon === 'movement' ? MovementIcon : icon === 'recovery' ? RecoveryIcon : PlanIcon

                return (
                  <article
                    key={id}
                    className="flex h-full flex-col rounded-3xl border border-[#0d3d36]/10 bg-[#f8f5f2] p-5 shadow-[0_10px_30px_rgba(22,33,30,0.04)]"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-2xl font-medium text-[#0f2b2b]">{id}</span>
                    </div>

                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] border border-[#0d3d36]/10 bg-white text-[#0d3d36]">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="mb-3 text-3xl font-secondary leading-none tracking-[-0.04em] text-[#0f2b2b]">
                      {title}
                    </h3>

                    <p className="mb-4 text-base leading-7 text-[#496564]">{description}</p>

                    <ul className="mt-auto space-y-3 text-base text-[#1d3632]">
                      {bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-[0.4rem] inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#dff2eb] text-[#0d3d36]">
                            <span className="inline-block h-2 w-2 rounded-full bg-[#0d3d36]" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#0d3d36]">
                      Saiba mais
                      <SendArrowIcon className="h-4 w-4" />
                    </button>
                  </article>
                )
              })}
            </div>
          </section>

          <section className="mt-20 grid items-center gap-8 rounded-[28px] border border-[#d9d1ca] bg-[#f7f3ef] p-4 md:grid-cols-[1.1fr_1fr] md:p-0">
            <div className="overflow-hidden rounded-[22px] bg-[#d8d0c8]">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80"
                alt="Pessoa realizando exercício com acompanhamento profissional"
                className="h-105 w-full object-cover"
              />
            </div>

            <div className="px-3 pb-5 md:px-8 md:pb-8">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-0.5 w-10 bg-[#d76541]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#d76541] uppercase">Sobre nós</span>
              </div>

              <h2 className="font-secondary text-[3.7rem] leading-[0.95] tracking-[-0.06em] text-[#0f2b2b]">
                Movimento com atenção e propósito
              </h2>

              <p className="mt-5 max-w-130 text-[1.05rem] leading-8 text-[#496564]">
                Na Viva Movimento, cada atendimento começa com escuta, avaliação e objetivos definidos em conjunto. Nossa equipe acompanha seu processo com atenção em cada etapa.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0d3d36] px-5 py-3.5 text-base font-semibold text-white shadow-[0_10px_18px_rgba(13,61,54,0.16)] transition hover:bg-[#0b322e]">
                Conheça a clínica
                <SendArrowIcon className="h-4 w-4" />
              </button>
            </div>
          </section>

          <section className="mt-20 rounded-[22px] bg-[#0d3d36] px-6 py-7 text-white shadow-[0_25px_42px_rgba(10,42,38,0.16)] md:px-10 md:py-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-155 font-secondary text-[2.8rem] leading-[0.95] tracking-tighter text-white md:text-[3.3rem]">
                Vamos dar o próximo passo juntos?
              </h2>

              <button className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0d3d36] transition hover:bg-[#edf3f1]">
                Agende sua avaliação
                <SendArrowIcon className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 max-w-155 text-[1.05rem] leading-7 text-[#dce8e7]">
              Conte para nós o que você precisa. Nossa equipe está pronta para orientar você sobre o melhor caminho para começar.
            </p>
          </section>
        </main>

        <footer className="mt-14 border-t border-[#0d3d36]/10 pb-8 pt-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f7f3ef] text-[#0d3d36] shadow-[inset_0_0_0_1px_rgba(13,61,54,0.12)]">
                <ClinicIcon className="h-4 w-4" />
              </div>
              <span className="font-secondary text-[1.7rem] leading-none text-[#0d3d36]">Viva Movimento</span>
            </div>

            <nav className="flex flex-wrap items-center gap-5 text-sm text-[#23463f] md:justify-center">
              {navItems.map((item) => (
                <a key={item} href="#" className="transition hover:text-[#0d3d36]">
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 text-[#0d3d36]">
              <SocialIcon kind="instagram" />
              <SocialIcon kind="facebook" />
              <SocialIcon kind="whatsapp" />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-2 text-sm text-[#59706d] md:flex-row md:items-center md:justify-between">
            <span>© 2026 Viva Movimento. Todos os direitos reservados.</span>
            <div className="flex items-center gap-5">
              <a href="#" className="hover:text-[#0d3d36]">Política de Privacidade</a>
              <a href="#" className="hover:text-[#0d3d36]">Termos de Uso</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
