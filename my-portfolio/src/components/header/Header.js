import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import './header.css';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Me', href: '#' },
  { name: 'Skills', href: '#' },
  { name: 'Contact', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="px-4 sm:px-6 py-2 lg:px-24 bg-gray-200">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    'x'
                  ) : (
                    <i className="fa-solid fa-bars"></i>
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
                <div className="flex flex-shrink-0 items-center text-black font-bold text-xl sm:text-4xl ">
                  R
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-orange-500"
                  >
                    <path
                      d="M12 2.59009V13.6101L2.65 20.1501C1.8 19.1401 1.75 17.6101 2.7 15.9001L5.82 10.2901L8.76 5.00009C9.65 3.40009 10.82 2.59009 12 2.59009Z"
                      fill="#F97316"
                    ></path>{' '}
                    <path
                      opacity="0.6"
                      d="M21.3504 20.1501C20.7004 20.9401 19.5704 21.4101 18.0604 21.4101H5.94039C4.43039 21.4101 3.30039 20.9401 2.65039 20.1501L12.0004 13.6101L21.3504 20.1501Z"
                      fill="#F97316"
                    ></path>{' '}
                    <path
                      opacity="0.4"
                      d="M21.35 20.1501L12 13.6101V2.59009C13.18 2.59009 14.35 3.40009 15.24 5.00009L18.18 10.2901L21.3 15.9001C22.25 17.6101 22.2 19.1401 21.35 20.1501Z"
                      fill="#F97316"
                    ></path>{' '}
                  </svg>
                  UDRA
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <ul className="flex space-x-4 items-center">
                    {navigation.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.href}
                          className={classNames(
                            'text-black hover:text-orange-500',
                            'rounded-md px-3 cursor-none py-2 text-lg font-medium'
                          )}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <ul className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <li key={index} className="w-fit">
                  {' '}
                  <a
                    as="a"
                    href={item.href}
                    className={classNames(
                      'text-black hover:text-orange-500',
                      'rounded-md px-3 cursor-none py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
