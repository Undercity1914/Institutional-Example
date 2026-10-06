const navItems = ['Início', 'Sobre', 'Serviços', 'Contato']

const advantages = [
  {
    title: 'Planejamento',
    icon: 'plan',
  },
  {
    title: 'Qualidade',
    icon: 'shield',
  },
  {
    title: 'Compromisso',
    icon: 'handshake',
  },
]

const serviceCards = [
  {
    id: '01',
    title: 'Construção residencial',
    description: 'Do planejamento à entrega do seu novo lar.',
    bullets: ['Planejamento da obra', 'Execução por etapas', 'Acompanhamento técnico'],
    icon: 'house',
  },
  {
    id: '02',
    title: 'Reformas',
    description: 'Mais conforto e funcionalidade para seu espaço.',
    bullets: ['Renovação de ambientes', 'Melhor uso dos espaços', 'Atenção aos acabamentos'],
    icon: 'wrench',
  },
  {
    id: '03',
    title: 'Gestão de obras',
    description: 'Organização e clareza em cada fase do projeto.',
    bullets: ['Controle de prazos', 'Organização de custos', 'Coordenação da execução'],
    icon: 'checklist',
  },
]

function HouseIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5v10.5h14V9.5" />
      <path d="M9 20v-6h6v6" />
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

function HandshakeIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 10.5 4.5 13l5.5 5.5 6.5-6.5 3.5 3.5L10.5 22 4 15.5l3-5Z" />
      <path d="M13 9.5 9 5.5l2-2 7 7-2 2-1.5-1.5" />
      <path d="M8.5 9.5 5 13" />
      <path d="M18 7.5l-3.5 3.5" />
    </svg>
  )
}

function WrenchIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.2 7.5a4.2 4.2 0 0 1 5.8 6.1l-2.8 2.8-1.5-1.5 2.8-2.8a2.6 2.6 0 0 0-3.5-3.5L11 10.4l-1.5-1.5 2.1-2.1a4.2 4.2 0 0 1 2.6-1.3Z" />
      <path d="M8.4 15.6 4 20l-1.5-1.5L6.9 14l1.5 1.5Z" />
      <path d="M4 6.5 6.5 4" />
    </svg>
  )
}

function ChecklistIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 4.75h10.5A1.75 1.75 0 0 1 20.25 6.5v10.5A1.75 1.75 0 0 1 18.5 18.75H8" />
      <path d="M8 4.75v14.5M5.5 7.25h.01M5.5 11.75h.01M5.5 16.25h.01" />
      <path d="m9.5 9.5 1.5 1.5 3-3" />
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
              <HouseIcon className="h-4 w-4" />
            </div>
            <span className="font-secondary text-[1.7rem] leading-none text-[#0d3d36]">Norte Construções</span>
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
            Solicitar orçamento
            <SendArrowIcon className="h-4 w-4" />
          </button>
        </header>

        <main>
          <section className="grid items-center gap-8 py-10 md:grid-cols-[1.05fr_1.15fr] md:py-12">
            <div className="max-w-135">
              <h1 className="font-secondary text-[4.2rem] leading-[0.9] tracking-[-0.06em] text-[#0f2b2b] md:text-[5rem]">
                Confiança para
                <br />
                cada novo começo
              </h1>

              <p className="mt-6 max-w-107.5 text-[1.05rem] leading-8 text-[#496564]">
                Construção e reforma com qualidade, planejamento e atenção aos detalhes.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0d3d36] px-5 py-3.5 text-base font-semibold text-white shadow-[0_10px_18px_rgba(13,61,54,0.16)] transition hover:bg-[#0b322e]">
                Solicitar orçamento
                <SendArrowIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="overflow-hidden rounded-[28px] border border-[#d9d1ca] bg-[#d9d1ca] shadow-[0_26px_48px_rgba(42,29,20,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                alt="Casa moderna com jardim"
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
                    : HandshakeIcon

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
              Da ideia à realização
            </h2>

            <p className="mt-4 max-w-205 text-[1.02rem] leading-8 text-[#496564]">
              Soluções completas em construção e reforma, com planejamento, qualidade e foco em cada detalhe do seu projeto.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {serviceCards.map(({ id, title, description, bullets, icon }) => {
                const Icon = icon === 'house' ? HouseIcon : icon === 'wrench' ? WrenchIcon : ChecklistIcon

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
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                alt="Varanda com área gourmet"
                className="h-105 w-full object-cover"
              />
            </div>

            <div className="px-3 pb-5 md:px-8 md:pb-8">
              <div className="mb-5 flex items-center gap-4">
                <span className="h-0.5 w-10 bg-[#d76541]" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#d76541] uppercase">Sobre nós</span>
              </div>

              <h2 className="font-secondary text-[3.7rem] leading-[0.95] tracking-[-0.06em] text-[#0f2b2b]">
                Seu projeto em boas mãos
              </h2>

              <p className="mt-5 max-w-130 text-[1.05rem] leading-8 text-[#496564]">
                A Norte Construções é especializada em construção e reforma, unindo experiência, planejamento e atenção aos detalhes para entregar resultados que valorizam o seu patrimônio.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0d3d36] px-5 py-3.5 text-base font-semibold text-white shadow-[0_10px_18px_rgba(13,61,54,0.16)] transition hover:bg-[#0b322e]">
                Conheça a nossa história
                <SendArrowIcon className="h-4 w-4" />
              </button>
            </div>
          </section>

          <section className="mt-20 rounded-[22px] bg-[#0d3d36] px-6 py-7 text-white shadow-[0_25px_42px_rgba(10,42,38,0.16)] md:px-10 md:py-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <h2 className="max-w-155 font-secondary text-[2.8rem] leading-[0.95] tracking-tighter text-white md:text-[3.3rem]">
                Vamos construir seu próximo passo?
              </h2>

              <button className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-white px-5 py-3 text-base font-semibold text-[#0d3d36] transition hover:bg-[#edf3f1]">
                Fale com a gente
                <SendArrowIcon className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-3 max-w-155 text-[1.05rem] leading-7 text-[#dce8e7]">
              Fale com a nossa equipe e receba um orçamento personalizado para o seu projeto.
            </p>
          </section>
        </main>

        <footer className="mt-14 border-t border-[#0d3d36]/10 pb-8 pt-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#f7f3ef] text-[#0d3d36] shadow-[inset_0_0_0_1px_rgba(13,61,54,0.12)]">
                <HouseIcon className="h-4 w-4" />
              </div>
              <span className="font-secondary text-[1.7rem] leading-none text-[#0d3d36]">Norte Construções</span>
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
            <span>© 2026 Norte Construções. Todos os direitos reservados.</span>
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
