using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Move_Bullet : Shoot
{

    public Rigidbody2D projectile;

    // Gets game object of player
    public GameObject player_gameObject;

    // Gets the bullet
    public GameObject bullet;

    // Gets the E_bullet
    public GameObject e_bullet;

    // Gets the top of play area
    public GameObject top;

    // Sonic Speed!
    public float moveSpeed = 30.0f;

    // Damage to enemy on hit
    public int damage = 5;

    float height;
    float width;

    // Used to grab damage
    public int getDamage()
    {
        return damage;
    }



    private void Awake()
    {
        // Main camera
        Camera cam = Camera.main;

        // Gets width and height of camera
        height = 2f * cam.orthographicSize;
        width = height * cam.aspect;
    }


    // Use this for initialization
    void Start()
    {
        // Grabs the rigidbody
        projectile = this.gameObject.GetComponent<Rigidbody2D>();
        player_gameObject = GameObject.Find("Spaceship");
        top = GameObject.Find("Cube_Top");


        bullet = this.gameObject;
        if (player_gameObject != null)
        {
            Physics2D.IgnoreCollision(player_gameObject.GetComponent<Collider2D>(), bullet.GetComponent<Collider2D>());
        }

        Physics2D.IgnoreCollision(top.GetComponent<Collider2D>(), bullet.GetComponent<Collider2D>());
    }

    // Update is called once per frame
    void Update()
    {
        projectile.velocity = new Vector2(0, 1) * moveSpeed;
        if (projectile.transform.position.y > ((height / 2) + 1))
        {
            Destroy(bullet);
        }
    }




}
