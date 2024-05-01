
               <?php
                define('DB_NAME', 'gaia');
                define('DB_USER', 'root');
                define('DB_PASSWORD', '');
                define('DB_HOST', 'localhost');
                define('DB_CHARSET', 'utf8mb4');
                define('DB_COLLATE', '');
                define('WP_MEMORY_LIMIT', '128M');

                define('WP_DEBUG', true);
                define('WP_DEBUG_LOG', true);
                define('WP_DEBUG_DISPLAY', false);



                define('AUTH_KEY',         'yJkP;Te-=iuC%l)i{?{Q4#zZ[X^H-f8L|TzZoTH//4NXatmv8Ll#[i9ORxsBaw @');
                define('SECURE_AUTH_KEY',  '0|C2aa;o|Zy{M.3^1Ci[f+|/Ek;xB/2|3f,-5/wOrz3|ow`-k,J,:j4Z7>Sf{3?-');
                define('LOGGED_IN_KEY',    '+<T8PvzyE^@I}V#D@fatV;T@|:5?j#}r+!mI,kOKA=z-@~Q>Yn-%SsO%LqIT@JzC');
                define('NONCE_KEY',        '+qZ+x3_hn[n?`r <)ZPg,(L%R7+A /!?S+<A!9S0[t3++b8!Hp5$;Ro06>MOh0G/');
                define('AUTH_SALT',        'v~6).zVZYLn`g7vUd&PqR:|DXY{dS/E3%l.x<;.l-{AGQ^5[We>XR|,GE~/)Zxp;');
                define('SECURE_AUTH_SALT', 'Rw|2{-1WC[WOH]GNZSdn8MfVlcjpl}Lyd5#$bqyng!wu%c[-cP5M}jA!D.Z{C;!Z');
                define('LOGGED_IN_SALT',   'Y.w~+8ol b[8,`,Y|SG~Gr$mS^B6-$V.sTal^y#|* kpY;KD&RFA/QHa>}tx8?o|');
                define('NONCE_SALT',       '3w{Nwb8.s~uc&K/wnai^r{tEH~dXoVAH2yg]<=$Cn6I`]3M@B{`7v|eBbxap0b.I');
                // Insert generated keys and salts here

                // Custom WordPress table prefix
                $table_prefix = 'wp_';

                // Absolute path to the WordPress directory
                if (!defined('ABSPATH')) {
                    define('ABSPATH', __DIR__ . '/');
                }

                // Sets up WordPress vars and included files
                require_once ABSPATH . 'wp-settings.php';
