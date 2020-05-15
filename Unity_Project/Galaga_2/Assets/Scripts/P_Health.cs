using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class P_Health : Starting_Health
{

    // Grabs the parent object for deletion if health goes to 0
    GameObject spaceship;

    // Used to access the game controller
    public Game_Controller game_Controller;
    public GameObject game_Controller_Object;
    public Health_Bar health_Bar;

    // Used for changing color
    public Material m_Invincible;
    public Material m_Normal;
    public SpriteRenderer sr_Sphere;
    public Transform t_Sphere;
    private CircleCollider2D cc_Sphere;
    public Sprite s_sphere;
    public Sprite s_invincible;

    int health = 20;
    int maxHealth = 20;
    int damage = 0;

    // Used for respawn timer
    public float waitTime = 1.0f;
    public float currentTime = 0.0f;

    // Used for respawn invincibility
    private bool invincible = false;
    private IEnumerator coroutine;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (invincible == false)
        {
            if (collision.gameObject.tag == "e_bullet")
            {
                damage = collision.GetComponent<E_Move_Bullet>().getDamage();
                health -= damage;
                health_Bar.takeDamage(maxHealth, damage);
                Debug.Log("Health: " + health);
                Destroy(collision.gameObject);

                // Checks the player's health
                game_Controller.HealthCheck(health, spaceship);
            }
        }

    }




    private IEnumerator Invincible(float waitTime)
    {
        invincible = true;
        cc_Sphere.enabled = false;
        sr_Sphere.color = new Color(1f, 1f, 1f, .5f);
        t_Sphere.localScale = new Vector3(8, 8, 1);
        sr_Sphere.sprite = s_invincible;

        while (waitTime > 0)
        {
            yield return new WaitForSeconds(1.0f);
            waitTime--;

        }

        invincible = false;
        cc_Sphere.enabled = true;
        t_Sphere.localScale = new Vector3(1, 1, 1);
        sr_Sphere.sprite = s_sphere;
        sr_Sphere.color = new Color(1f, 1f, 1f, 1f);
    }

    private void Awake()
    {
        health_Bar = GameObject.FindGameObjectWithTag("healthBar").GetComponent<Health_Bar>();
        health_Bar.resetHealth();
    }
    // Use this for initialization
    void Start()
    {

        // Used for changing colors
        sr_Sphere = this.GetComponent<SpriteRenderer>();
        t_Sphere = this.GetComponent<Transform>();
        cc_Sphere = this.GetComponent<CircleCollider2D>();
        s_sphere = Resources.Load<Sprite>("Images/Sphere2");
        s_invincible = Resources.Load<Sprite>("Images/Shield");
        health_Bar = GameObject.FindGameObjectWithTag("healthBar").GetComponent<Health_Bar>();


        spaceship = this.gameObject.transform.parent.gameObject;
        game_Controller_Object = GameObject.Find("GameController");
        game_Controller = game_Controller_Object.GetComponent<Game_Controller>();

        // Starts invincibility
        coroutine = Invincible(3.0f);
        StartCoroutine(coroutine);

    }

    // Update is called once per frame
    void Update()
    {
        currentTime += Time.deltaTime;
    }
}
